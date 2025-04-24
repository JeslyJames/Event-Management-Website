"use strict";

$(document).ready(() => {

        //attach event handler for all 'a' tags under #des_list
        $("#des_list a").click( evt => {

            //prevent default action of link
            evt.preventDefault();

            //get currently clicked 'a' tag
            const a = evt.currentTarget;

            //get currently clicked 'a' tag's href value
            let div_id = $(a).prop('href');
            let substring = div_id.substring(div_id.indexOf('#'));
            div_id = substring;
            

            $("#link_container div").stop().animate(
                {opacity:0},
                500,
                () => {
                    //change the div content using display property to show and hide div
                    $("#link_container div").removeClass('show');
                    $("#link_container div").addClass('hide');

                    $(div_id).addClass('show');
                    $(div_id).removeClass('hide');

                    $("#link_container div").animate(
                        {opacity:1},
                        500
                    );            
                    
                }

            );        
            

        });

      

       // set event handler for all h3 tags
        $("#features h3").click( evt => {
            // get clicked h3 tag
            const h3 = evt.currentTarget;

            // toggle minus class for h3 tag
            $(h3).toggleClass("minus");

            // show or hide related section
            if ($(h3).attr("class") !== "minus") 
            {
                $(h3).parent().next().hide();
            }
            else
            {
                $(h3).parent().next().show();
            }

            evt.preventDefault();
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