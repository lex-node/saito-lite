const EmailForm          = require('./email-form/email-form');
const EmailDetail        = require('./email-detail/email-detail');
const EmailAppspace         = require('./email-appspace/email-appspace');
const EmailAppspaceTemplate = require('./email-appspace/email-appspace.template.js');
const EmailListTemplate     = require('./email-list/email-list.template.js');


module.exports = EmailBody = {

    app: {***REMOVED***,

    render(app, data={***REMOVED***) {

        data.parentmod.body = this;

        switch(data.parentmod.active) {
            case "email_list":
                EmailList.render(app, data);
                EmailList.attachEvents(app, data);
                break;
            case "email_form":
                EmailForm.render(app, data);
                EmailForm.attachEvents(app, data);
                break;
            case "email_detail":
                EmailDetail.render(app, data);
                EmailDetail.attachEvents(app, data);
                break;
            case "email_appspace":
                document.querySelector('.email-body').innerHTML = EmailAppspaceTemplate();
                EmailAppspace.render(app, data);
                EmailAppspace.attachEvents(app, data);
                break;
            default:
                break;
    ***REMOVED***
***REMOVED***,

    attachEvents(app, data) {
        document.querySelector('#email.create-button')
                .addEventListener('click', (e) => {
                    data.parentmod.active = "email_form";
                    data.parentmod.previous_state = "email_list";
                    data.parentmod.main.render(app, data);
                    data.parentmod.main.attachEvents(app, data);
            ***REMOVED***);
***REMOVED***
***REMOVED***

