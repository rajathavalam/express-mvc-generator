var LocalStrategy   = require('passport-local').Strategy;

var User            = require('../app/models/home');

var bcrypt = require('bcrypt-nodejs');

var configAuth = require('./auth.js');
var constant = require('../config/constants');
var dateFormat = require('dateformat');
var fs = require('fs');

var bcrypt = require('bcrypt-nodejs');


//expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'mail' :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                return done(null, false, req.flash('error', 'That email is already taken.'));
            } else {
            	
            	
           User.find().sort([['_id', 'descending']]).limit(1).exec(function(err, userdata) {	

        	   
                // if there is no user with that email
                // create the user
                var newUser            = new User();

                // set the user's local credentials
                
           	  var day =dateFormat(Date.now(), "yyyy-mm-dd HH:MM:ss");
           	 
           	  var active_code=bcrypt.hashSync(Math.floor((Math.random() * 99999999) *54), null, null);
           	 
               
                    newUser.mail    = email;
                    newUser.password = newUser.generateHash(password);
                    newUser.name = req.body.username;
                    newUser.created_date = day;
                    newUser.updated_date = day;
                    newUser.status = 'active'; //inactive for email actiavators
                    newUser.active_hash = active_code;
                    newUser._id = userdata[0]._id+1;


                // save the user
                newUser.save(function(err) {
                    if (err)
                        throw err;

                  /*  var email            = require('../lib/email.js');
                    email.activate_email(req.body.username,req.body.email,active_code);
                                        return done(null, newUser,req.flash('success', 'Account Created Successfully,Please Check Your Email For Account Confirmation.'));
                    */
                    return done(null, newUser,req.flash('success', 'Account Created Successfully'));
                    
                    req.session.destroy();
                
                });
                
              });
           
                
            }

        });    

        });

        
    }));
    
    
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

    	
    	
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'mail' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            
            if (err)
            return done(null, false, req.flash('error', err)); // req.flash is the way to set flashdata using connect-flash


            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('error', 'Sorry Your Account Not Exits ,Please Create Account.')); // req.flash is the way to set flashdata using connect-flash

            
            
            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, req.flash('error', 'Email and Password Does Not Match.')); // create the loginMessage and save it to session as flashdata

            if(user.status === 'inactive')
             return done(null, false, req.flash('error', 'Your Account Not Activated ,Please Check Your Email')); // create the loginMessage and save it to session as flashdata
            
            
            // all is well, return successful user
            req.session.user = user;
		
            return done(null, user);
        });

    }));

};

    
    





