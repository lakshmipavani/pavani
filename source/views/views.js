/**
    For simple applications, you might define all of your views in this file.  
    For more complex applications, you might choose to separate these kind definitions 
    into multiple files under this folder.
*/
enyo.kind({
    name: "myapp.MainView",
    kind: "FittableRows",
    fit: true,
    components: [{
            name: "basePanels",
            kind: "Panels",
            style: "width:100%;height:100%;",
            components: [{
                    name: "mainAdmin",
                    kind: "adminView",
                    //"onhandleButtontap": "changePanel"
                }, {
                    name: "loginPage",
                    kind: "adminLoginPage"
                },

                {
                    name: "userloginPage",
                    kind: "userLoginPage"
                },

                {
                    name: "userRegisterPage",
                    kind: "userRegistrationPage"
                }

            ]

        },

    ],
    create: function() {
        this.inherited(arguments);
        this.$.basePanels.setIndex(0);
        console.log('app created');
    },

    handlers: {
        onUpdate: 'adminPage'
    },


    adminPage: function(insender,inevent) {
        // this.$.mainAdmin.setContent("adminLoginPage");
       /* if (inevent.viewType === "admin") {
            this.$.basePanels.setIndex(1);
        } else if (inevent.viewType === "user") {
            this.$.basePanels.setIndex(2);
        } else if (inevent.viewType === "previous") {
            this.$.basePanels.setIndex(0);
        } else {
            this.$.basePanels.setIndex(3);
        }*/

        switch(inevent.viewType)
          {
            case "admin":this.$.basePanels.setIndex(1);
                  break;
            case "user":this.$.basePanels.setIndex(2);
                         break;
            case "previous":this.$.basePanels.setIndex(3);
                         break;             
            case "userRegister":this.$.basePanels.setIndex(3);
                               break;
          }
        return true;
    },

    // userPage: function() {
    //     this.$.basePanels.setIndex(2);
    //     this.render();
    //     return true;
    // }



});
enyo.kind({
    name: "adminView",
    kind: "FittableRows",
    fit: true,
    components: [
        { kind: "onyx.Toolbar", content: "Hello World" }, {
            kind: "enyo.Scroller",
            fit: true,
            classes: "main",
            components: [
                { content: "Its For Us" },
                { kind: "onyx.Button", content: "Admin Login", ontap: 'tapped' }, { tag: "br" },
                { kind: "onyx.Button", content: "User Login", ontap: 'tapUser' }, { tag: "br" }, {
                    kind: "enyo.Control",
                    tag: "a",
                    attributes: { href: "http://enyojs.com" },
                    content: "Link to Enyo website"
                }, { name: "main", classes: "nice-padding", allowHtml: true }
            ]
        }

    ],
    tapped: function() {
        this.bubble('onUpdate', { viewType: "admin" });

    },

    tapUser: function() {
        this.bubble('onUpdate', { viewType: "user" });
    }



});








enyo.kind({
    name: "adminLoginPage",
    kind: "FittableRows",
    fit: true,
    components: [
        { kind: "onyx.Toolbar", content: "Hello World" },
        { kind: "onyx.Button", ontap: "previous", content: "back" }, {
            kind: "enyo.Scroller",
            fit: true,
            classes: "main",
            content: "login",
            components: [{
                    content: "Admin Login",
                    style: "display: inline;padding-right: 20px;"
                }, {
                    kind: "onyx.Input",
                    placeholder: "enter admin name"
                }, { tag: "br" },

                {
                    content: "Password",
                    style: "display:inline ; padding-right: 25px;"
                },
                { kind: "onyx.Input", placeholder: "enter password" }
            ]
        }
    ],
    previous: function() {

        this.bubble('onUpdate', { viewType: "previous" });

    }

});





enyo.kind({
    name: "userLoginPage",
    kind: "FittableRows",
    fit: true,
    components: [
        { kind: "onyx.Toolbar", content: "Hello World" },
        { kind: "onyx.Button", ontap: "previous", content: "back" }, {
            kind: "enyo.Scroller",
            fit: true,
            classes: "main",
            components: [
                { content: "user Login", style: "display: inline ; padding-right: 20px;" }, {
                    kind: "onyx.Input",
                    placeholder: "enter user name"
                }, { tag: "br" }, {
                    content: "Password",
                    style: "display:inline ; padding-right:25px;"
                },

                { kind: "onyx.Input", placeholder: "enter password" },
                { tag: "br" },
                { kind: "onyx.Button", ontap: "registerPage", content: "new user register" }

            ],
        }
    ],
    registerPage: function() {
        this.bubble('onUpdate', { viewType: "userRegister" });
    },

    previous: function() {

        this.bubble('onUpdate', { viewType: "previous" });

    }

});




enyo.kind({
    name: "userRegistrationPage",
    kind: "FittableRows",
    fit: true,
    components: [
        { kind: "onyx.Toolbar", content: "Hello World" }, {
            kind: "enyo.Scroller",
            fit: true,
            classes: "main",
            components: [
                { content: "username", style: "display:inline ; padding-right: 25px;" },
                { kind: "onyx.Input" }, { tag: "br" },

                { content: "email", style: "display:inline ; padding-right: 25px;" },
                { kind: "onyx.Input", name: "email", is: "required email", min: 6, placeholder: "E-mail" }, { tag: "br" },

                { content: "password", style: "display:inline ; padding-right: 25px;" },
                { kind: "onyx.Input" }, { tag: "br" },

                { content: "Gender", style: "display:inline ; padding-right: 25px;" }, {
                    kind: "onyx.RadioGroup",
                    components: [
                        { content: "Male", active: true },
                        { content: "Female" },
                        { content: "others" }
                    ]
                }, { tag: "br" },

                { content: "phone number", style: "display:inline ; padding-right: 25px;" },
                { kind: "onyx.Input" }, { tag: "br" }





            ]

        }
    ]

});
