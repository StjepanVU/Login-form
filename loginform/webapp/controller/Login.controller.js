sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("ns.loginform.controller.Login", {
            onInit: function () {
                
            },

            prepareData: async function() {
                var email = this.getView().byId("email").getValue();
                var password = this.getView().byId("password").getValue();

                return {
                    "email": email,
                    "password": password,
                };
            },

            prepareRequest: function() {
                let urlpost = "http://127.0.0.1:8000/api/login";
                let xhr = new XMLHttpRequest();
                xhr.open("POST", urlpost, true);
                xhr.setRequestHeader("Accept","application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
                //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                
                xhr.onreadystatechange = function() {
                    //let responseObject = JSON.parse(xhr.responseText);
                    
                    if(xhr.readyState == 4) {
                        console.log(xhr.responseText);
                        console.log("Connection established");
                        
                        /*
                        if(responseObject.hasOwnProperty('success')) {
                            MessageToast.show("Connection established");
                        }
                        */
                    }
                    else {
                        console.log("Connection unsuccessful");
                    }
                }
                return xhr;
            },

            onSignInPress: async function() { 
                let data = await this.prepareData();
                let xhr = this.prepareRequest();
                console.log(data);
                xhr.send(JSON.stringify(data));
                //xhr.send(data);
                MessageToast.show("Hello");
            }
        });
    });
