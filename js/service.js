"use strict";

$(document).ready(() => {

        // the handler for the click event of the submit button
        $("#reg_form").submit( evt => {
            let isValid = true;

            // validate the  name entry
            const Name = $("#name").val().trim();
            if (Name == "") 
            {
                $("#name").next().text("*Please fill this field.");
                isValid = false;
            } 
            else 
            {
                $("#name").next().text("");
            }
            $("#name").val(Name);

            // validate the partner name entry
            const partnerName = $("#p_name").val().trim();
            if (partnerName == "") 
            {
                $("#p_name").next().text("*Please fill this field.");
                isValid = false;
            } 
            else 
            {
                $("#p_name").next().text("");
                    
            }
            $("#p_name").val(partnerName);      
            
            // validate the event type entry
            const eventType = $("#event_type").val().trim();
            if (eventType == "") 
            {
                $("#event_type").next().text("*Please fill this field.");
                isValid = false;
            } 
            else 
            {
                $("#event_type").next().text("");
            }
            $("#event_type").val(eventType);

            // validate the destination entry
            const destination = $("#destination").val().trim();
            if (destination == "") 
            {
                $("#destination").next().text("*Please fill this field.");
                isValid = false;
            } 
            else 
            {
                $("#destination").next().text("");
            }
            $("#destination").val(destination);

            // validate the destination entry
            const eventPlan = $("#event_time").val().trim();
            if (eventPlan == "") 
            {
                $("#event_time").next().text("*Please fill this field.");
                isValid = false;
            } 
            else 
            {
                $("#event_time").next().text("");
            }
            $("#event_time").val(eventPlan);

            // validate the phone number with a regular expression
            const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
            const phone = $("#phone").val().trim();
            if (phone == "") 
            { 
                $("#phone").next().text("*Please fill this field.");
                isValid = false; 
            } 
            else if ( !phoneRegex.test(phone) ) 
            {
                $("#phone").next().text("*Please use 999-999-9999 format.");
                isValid = false;
            } 
            else 
            {
                $("#phone").next().text("");
            }
            $("#phone").val(phone);

            // validate the email entry with a regular expression
            const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            const email = $("#email").val().trim();
            if (email == "") 
            { 
                $("#email").next().text("*Please fill this field.");
                isValid = false;
            } 
            else if ( !emailRegex.test(email) ) 
            {
                $("#email").next().text("*Please enter a valid email address.");
                isValid = false;
            } 
            else 
            {
                $("#email").next().text("");
            }
            $("#email").val(email);       

                        
            // prevent the submission of the form if any entries are invalid 
            if (isValid == false) {
                evt.preventDefault();                
            }
            else
            {
                evt.preventDefault();
                //alert registration is completed
                alert("Registered successfully !");
                //clear all fields
                $("#name").val("");
                $("#p_name").val("");
                $("#event_type").val("");
                $("#destination").val("");
                $("#event_time").val("");
                $("#phone").val("");
                $("#email").val("");
            }
        });

        //form reset click event
        $("#reset").click( evt => {

            $("span").text("");
            $("#reg_form").trigger("reset");

        });

        //attach event handler for subscribe btn click
        $("#btn_subs").click( evt => {
            
                $("#btn_subs").toggleClass("hide",true);
                $("#btn_unsub").toggleClass("hide",false);
                $("#p_thnks").toggleClass("hide",false);
                       
        });

        //attach event handler for unsubscribe btn click
        $("#btn_unsub").click( evt => {

                $("#btn_subs").toggleClass("hide",false);
                $("#btn_unsub").toggleClass("hide",true);
                $("#p_thnks").toggleClass("hide",true);
                       
        });
});