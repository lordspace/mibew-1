/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(){var r=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{};s.chat_avatar=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g=this.escapeExpression;return(a=f["if"].call(d,d.imageLink,{hash:{},inverse:this.program(3,function(){return'<div class="default-avatar"></div>'},c),fn:this.program(1,function(a,b){var d,c;d='<img src="';(c=f.imageLink)?c=c.call(a,{hash:{},data:b}):(c=a.imageLink,c="function"===typeof c?c.apply(a):c);return d+=g(c)+
'" border="0" alt="" />'},c),data:c}))||0===a?a:""});s.chat_controls_close=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g;a=f.helperMissing;b=this.escapeExpression;c={hash:{},data:c};return d='<div class="tpl-image" title="'+(b((g=f.L10n,g?g.call(d,"chat.window.close_title",c):a.call(d,"L10n","chat.window.close_title",c)))+'"></div>')});s.chat_controls_history=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g;a=f.helperMissing;
b=this.escapeExpression;c={hash:{},data:c};return d='<div class="tpl-image" title="'+(b((g=f.L10n,g?g.call(d,"page.analysis.userhistory.title",c):a.call(d,"L10n","page.analysis.userhistory.title",c)))+'"></div>')});s.chat_controls_redirect=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g,q=f.helperMissing,p=this.escapeExpression;return(a=f["if"].call(d,(g=d.user,null==g||!1===g?g:g.canPost),{hash:{},inverse:this.noop,fn:this.program(1,function(a,b){var c,d;
c={hash:{},data:b};return c='\n<div class="tpl-image" title="'+(p((d=f.L10n,d?d.call(a,"chat.window.toolbar.redirect_user",c):q.call(a,"L10n","chat.window.toolbar.redirect_user",c)))+'"></div>\n')},c),data:c}))||0===a?a:""});s.chat_controls_refresh=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g;a=f.helperMissing;b=this.escapeExpression;c={hash:{},data:c};return d='<div class="tpl-image" title="'+(b((g=f.L10n,g?g.call(d,"chat.window.toolbar.refresh",c):a.call(d,
"L10n","chat.window.toolbar.refresh",c)))+'"></div>')});s.chat_controls_secure_mode=r(function(){this.compilerInfo=[3,">= 1.0.0-rc.4"];return'<div class="tpl-image" title="SSL"></div>'});s.chat_controls_send_mail=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g;a=f.helperMissing;b=this.escapeExpression;c={hash:{},data:c};return d='<div class="tpl-image" title="'+(b((g=f.L10n,g?g.call(d,"chat.window.toolbar.mail_history",c):a.call(d,"L10n","chat.window.toolbar.mail_history",
c)))+'"></div>')});s.chat_controls_sound=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g=f.helperMissing,q=this.escapeExpression;return(a=f["if"].call(d,d.enabled,{hash:{},inverse:this.program(3,function(a,b){var c,d;c={hash:{},data:b};return c='\n    <div class="tpl-image sound-control-off" title="'+(q((d=f.L10n,d?d.call(a,"chat.window.toolbar.turn_on_sound",c):g.call(a,"L10n","chat.window.toolbar.turn_on_sound",c)))+'"></div>\n')},c),fn:this.program(1,function(a,
b){var c,d;c={hash:{},data:b};return c='\n    <div class="tpl-image sound-control-on" title="'+(q((d=f.L10n,d?d.call(a,"chat.window.toolbar.turn_off_sound",c):g.call(a,"L10n","chat.window.toolbar.turn_off_sound",c)))+'"></div>\n')},c),data:c}))||0===a?a:""});s.chat_controls_user_name=r(function(a,d,f,b,c){function g(a,c){var j,e,b;j=""+('\n        <div class="user-name-control-input-bg"><input id="user-name-control-input" type="text" size="12" value="'+h((e=(e=a.user,null==e||!1===e?e:e.name),typeof e===
t?e.apply(a):e))+'" class="username" /></div>\n        <a href="javascript:void(0)" class="user-name-control-set tpl-image" title="');b={hash:{},data:c};return j+=h((e=f.L10n,e?e.call(a,"chat.client.changename",b):l.call(a,"L10n","chat.client.changename",b)))+'"></a>\n    '}function q(a,b){var j,e,c;c={hash:{},data:b};j='\n        <a href="javascript:void(0)" title="'+(h((e=f.L10n,e?e.call(a,"chat.client.changename",c):l.call(a,"L10n","chat.client.changename",c)))+'">'+h((e=(e=a.user,null==e||!1===
e?e:e.name),typeof e===t?e.apply(a):e))+'</a>\n        <a class="user-name-control-change tpl-image" title="');c={hash:{},data:b};return j+=h((e=f.L10n,e?e.call(a,"chat.client.changename",c):l.call(a,"L10n","chat.client.changename",c)))+'"></a>\n    '}this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var p,t="function",h=this.escapeExpression,l=f.helperMissing,k=this;return(a=f["if"].call(d,(p=d.user,null==p||!1===p?p:p.canChangeName),{hash:{},inverse:k.program(6,function(a,c){var j,e;
j={hash:{},data:c};return j="\n"+(h((e=f.L10n,e?e.call(a,"chat.client.name",j):l.call(a,"L10n","chat.client.name",j)))+"&nbsp;"+h((e=(e=a.user,null==e||!1===e?e:e.name),typeof e===t?e.apply(a):e))+"\n")},c),fn:k.program(1,function(a,c){var j,e;j={hash:{},data:c};j='\n    <span class="user-name-control-prefix">'+(h((e=f.L10n,e?e.call(a,"chat.client.name",j):l.call(a,"L10n","chat.client.name",j)))+"</span>\n    ");if((e=f["if"].call(a,a.nameInput,{hash:{},inverse:k.program(4,q,c),fn:k.program(2,g,c),
data:c}))||0===e)j+=e;return j+="\n"},c),data:c}))||0===a?a:""});s.chat_layout=r(function(a,d,f,b,c){function g(j){var e;return j=""+("\n                <a onclick=\"window.open('"+m((e=(e=j.page,null==e||!1===e?e:e.webimHost),typeof e===k?e.apply(j):e))+'\');return false;" href="'+m((e=(e=j.page,null==e||!1===e?e:e.webimHost),typeof e===k?e.apply(j):e))+'">\n                    <img src="'+m((e=(e=(e=j.page,null==e||!1===e?e:e.company),null==e||!1===e?e:e.chatLogoURL),typeof e===k?e.apply(j):e))+
'" alt=""/>\n                </a>\n            ')}function q(j){var e;return j=""+('\n                <img src="'+m((e=(e=(e=j.page,null==e||!1===e?e:e.company),null==e||!1===e?e:e.chatLogoURL),typeof e===k?e.apply(j):e))+'" alt=""/>\n            ')}function p(j){var e;return j=""+("\n                <a onclick=\"window.open('"+m((e=(e=j.page,null==e||!1===e?e:e.webimHost),typeof e===k?e.apply(j):e))+'\');return false;" href="'+m((e=(e=j.page,null==e||!1===e?e:e.webimHost),typeof e===k?e.apply(j):
e))+'">\n                    <img src="'+m((e=(e=j.page,null==e||!1===e?e:e.tplRoot),typeof e===k?e.apply(j):e))+'/images/default-logo.gif" alt=""/>\n                </a>\n            ')}function t(j){var e;return j=""+('\n                <img src="'+m((e=(e=j.page,null==e||!1===e?e:e.tplRoot),typeof e===k?e.apply(j):e))+'/images/default-logo.gif" alt=""/>\n            ')}this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var h,l,k="function",m=this.escapeExpression,n=this;b=f.helperMissing;
a='\n<div id="top">\n    <div id="logo">\n        ';if((l=f["if"].call(d,(h=(h=d.page,null==h||!1===h?h:h.company),null==h||!1===h?h:h.chatLogoURL),{hash:{},inverse:n.program(6,function(j,e){var a,c,b;a="\n            ";if((b=f["if"].call(j,(c=j.page,null==c||!1===c?c:c.webimHost),{hash:{},inverse:n.program(9,t,e),fn:n.program(7,p,e),data:e}))||0===b)a+=b;return a+"\n        "},c),fn:n.program(1,function(a,e){var c,b,d;c="\n            ";if((d=f["if"].call(a,(b=a.page,null==b||!1===b?b:b.webimHost),
{hash:{},inverse:n.program(4,q,e),fn:n.program(2,g,e),data:e}))||0===d)c+=d;return c+"\n        "},c),data:c}))||0===l)a+=l;a+='\n        &nbsp;\n        <div id="page-title">'+m((h=(h=d.page,null==h||!1===h?h:h.title),typeof h===k?h.apply(d):h))+'</div>\n        <div class="clear">&nbsp;</div>\n    </div>\n</div>\n\n\n<div id="chat-header">\n    <div class="bgc"><div class="bgl"><div class="bgr">\n        \n        <div id="controls-region"></div>\n    </div></div></div>\n</div>\n\n\n<div id="chat">\n    <div class="bgl"><div class="bgr"><div class="sdwbgc"><div class="sdwbgl"><div class="sdwbgr">\n        ';
if((l=f.unless.call(d,(h=d.user,null==h||!1===h?h:h.isAgent),{hash:{},inverse:n.noop,fn:n.program(11,function(){return'\n        <div id="avatar-region"></div>\n        '},c),data:c}))||0===l)a+=l;c={hash:{},data:c};return a=a+'\n        \n        <div id="messages-region"></div>\n        \n        <div id="status-region"></div>\n    </div></div></div></div></div>\n</div>\n\n\n<div id="message-form-region"></div>\n\n\n<div id="footer">'+(m((h=f.L10n,h?h.call(d,"chat.window.poweredby",c):b.call(d,
"L10n","chat.window.poweredby",c)))+' <a id="poweredByLink" href="http://mibew.org" title="Mibew Community" target="_blank">mibew.org</a></div>')});s.chat_message=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g,q=this.escapeExpression,p=f.helperMissing;a={hash:{},data:c};a="<span>"+(q((g=f.formatTime,g?g.call(d,d.created,a):p.call(d,"formatTime",d.created,a)))+"</span> \n");if((g=f["if"].call(d,d.name,{hash:{},inverse:this.noop,fn:this.program(1,function(a,
c){var b,d;b="<span class='n";(d=f.kindName)?d=d.call(a,{hash:{},data:c}):(d=a.kindName,d="function"===typeof d?d.apply(a):d);b+=q(d)+"'>";(d=f.name)?d=d.call(a,{hash:{},data:c}):(d=a.name,d="function"===typeof d?d.apply(a):d);return b+=q(d)+"</span>: "},c),data:c}))||0===g)a+=g;a+="\n<span class='m";(g=f.kindName)?g=g.call(d,{hash:{},data:c}):(g=d.kindName,g="function"===typeof g?g.apply(d):g);a+=q(g)+"'>";if((g=f["if"].call(d,d.allowFormatting,{hash:{},inverse:this.program(5,function(a,c){var b,
d;d={hash:{},data:c};return q((b=f.apply,b?b.call(a,a.message,"urlReplace, nl2br",d):p.call(a,"apply",a.message,"urlReplace, nl2br",d)))},c),fn:this.program(3,function(a,c){var b,d;d={hash:{},data:c};return q((b=f.apply,b?b.call(a,a.message,"urlReplace, nl2br, allowTags",d):p.call(a,"apply",a.message,"urlReplace, nl2br, allowTags",d)))},c),data:c}))||0===g)a+=g;return a+="</span><br/>"});s.chat_message_form=r(function(a,d,f,b,c){function g(a,c){var j,e;j={hash:{},data:c};j='\n                <select id="predefined" size="1" class="answer">\n                    <option>'+
(h((e=f.L10n,e?e.call(a,"chat.window.predefined.select_answer",j):l.call(a,"L10n","chat.window.predefined.select_answer",j)))+"</option>\n                ");if((e=f.each.call(a,a.predefinedAnswers,{hash:{},inverse:k.noop,fn:k.program(5,q,c),data:c}))||0===e)j+=e;return j+="\n                </select>\n            "}function q(a){var c;return a=""+("\n                    <option>"+h((c=a["short"],typeof c===r?c.apply(a):c))+"</option>\n                ")}this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||
a.helpers;c=c||{};var p,r="function",h=this.escapeExpression,l=f.helperMissing,k=this;a='<div id="message">\n';if((b=f["if"].call(d,(p=d.user,null==p||!1===p?p:p.canPost),{hash:{},inverse:k.noop,fn:k.program(1,function(){return'\n    <div class="bgc"><div class="bgl"><div class="bgr">\n        <textarea id="message-input" class="message" tabindex="0" rows="4" cols="10"></textarea>\n    </div></div></div>\n'},c),data:c}))||0===b)a+=b;a+='\n</div>\n\n<div id="send">\n';if((b=f["if"].call(d,(p=d.user,
null==p||!1===p?p:p.canPost),{hash:{},inverse:k.noop,fn:k.program(3,function(a,c){var j,e,b;j='\n    <div id="postmessage">\n        <div id="predefined-wrapper">\n            ';if((b=f["if"].call(a,(e=a.user,null==e||!1===e?e:e.isAgent),{hash:{},inverse:k.noop,fn:k.program(4,g,c),data:c}))||0===b)j+=b;b={hash:{},data:c};j=j+'\n        </div>\n        <a href="javascript:void(0)" id="send-message" title="'+(h((e=f.L10n,e?e.call(a,"chat.window.send_message",b):l.call(a,"L10n","chat.window.send_message",
b)))+'">');b={hash:{},data:c};return j+=h((e=f.L10n,e?e.call(a,"chat.window.send_message_short_and_shortcut",b):l.call(a,"L10n","chat.window.send_message_short_and_shortcut",b)))+"</a>\n    </div>\n"},c),data:c}))||0===b)a+=b;return a+'\n</div>\n<div class="clear"></div>'});s.chat_status_base=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};a=this.escapeExpression;(f=f.title)?f=f.call(d,{hash:{},data:c}):(f=d.title,f="function"===typeof f?f.apply(d):f);return a(f)});
s.chat_status_message=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};a=this.escapeExpression;(f=f.message)?f=f.call(d,{hash:{},data:c}):(f=d.message,f="function"===typeof f?f.apply(d):f);return a(f)});s.chat_status_typing=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g;a=f.helperMissing;b=this.escapeExpression;c={hash:{},data:c};return b((g=f.L10n,g?g.call(d,"typing.remote",c):a.call(d,"L10n","typing.remote",c)))});s.leave_message_description=
r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g,q=f.helperMissing,p=this.escapeExpression;b={hash:{},data:c};a='<div class="buttons">\n    <a href="javascript:window.close();" title="'+(p((g=f.L10n,g?g.call(d,"leavemessage.close",b):q.call(d,"L10n","leavemessage.close",b)))+'">\n        <img class="tpl-image iclosewin" src="'+p((g=(g=d.page,null==g||!1===g?g:g.webimRoot),"function"===typeof g?g.apply(d):g))+'/images/free.gif" alt="');b={hash:{},data:c};a+=
p((g=f.L10n,g?g.call(d,"leavemessage.close",b):q.call(d,"L10n","leavemessage.close",b)))+'" />\n    </a>\n</div>\n<div class="messagetxt">';b={hash:{},data:c};return a+=p((g=f.L10n,g?g.call(d,"leavemessage.descr",b):q.call(d,"L10n","leavemessage.descr",b)))+"</div>"});s.leave_message_form=r(function(a,d,f,b,c){function g(e,a){var c,b;c='<input type="hidden" name="group" value="';(b=f.groupId)?b=b.call(e,{hash:{},data:a}):(b=e.groupId,b=typeof b===k?b.apply(e):b);return c+=m(b)+'"/>'}function q(e,
a){var c,b,j;c=""+('\n                        <option value="'+m((b=e.id,typeof b===k?b.apply(e):b))+'" ');if((j=f["if"].call(e,e.selected,{hash:{},inverse:n.noop,fn:n.program(6,p,a),data:a}))||0===j)c+=j;return c+=">"+m((b=e.name,typeof b===k?b.apply(e):b))+"</option>\n                    "}function p(){return'selected="selected"'}function r(e,a){var b;return(b=f["if"].call(e,e.selected,{hash:{},inverse:n.noop,fn:n.program(9,h,a),data:a}))||0===b?b:""}function h(e){var a;return m((a=e.description,
typeof a===k?a.apply(e):a))}this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var l,k="function",m=this.escapeExpression,n=this,j=f.helperMissing;a=""+('<form name="leaveMessageForm" method="post" action="">\n    <input type="hidden" name="style" value="'+m((l=(l=d.page,null==l||!1===l?l:l.style),typeof l===k?l.apply(d):l))+'"/>\n    <input type="hidden" name="info" value="');(b=f.info)?b=b.call(d,{hash:{},data:c}):(b=d.info,b=typeof b===k?b.apply(d):b);a+=m(b)+'"/>\n    <input type="hidden" name="referrer" value="';
(b=f.referrer)?b=b.call(d,{hash:{},data:c}):(b=d.referrer,b=typeof b===k?b.apply(d):b);a+=m(b)+'"/>\n    ';if((b=f.unless.call(d,d.groups,{hash:{},inverse:n.noop,fn:n.program(1,function(e,a){var b;return(b=f["if"].call(e,e.groupId,{hash:{},inverse:n.noop,fn:n.program(2,g,a),data:a}))||0===b?b:""},c),data:c}))||0===b)a+=b;b={hash:{},data:c};a=a+'\n\n    <div class="errors"></div>\n\n    <table cellspacing="1" cellpadding="5" border="0" class="form">\n        <tr>\n            <td><strong>'+(m((l=f.L10n,
l?l.call(d,"form.field.email",b):j.call(d,"L10n","form.field.email",b)))+':</strong></td>\n            <td><input type="text" name="email" size="50" value="');(b=f.email)?b=b.call(d,{hash:{},data:c}):(b=d.email,b=typeof b===k?b.apply(d):b);a+=m(b)+'" class="username"/></td>\n        </tr>\n        <tr>\n            <td><strong>';b={hash:{},data:c};a+=m((l=f.L10n,l?l.call(d,"form.field.name",b):j.call(d,"L10n","form.field.name",b)))+':</strong></td>\n            <td><input type="text" name="name" size="50" value="';
(b=f.name)?b=b.call(d,{hash:{},data:c}):(b=d.name,b=typeof b===k?b.apply(d):b);a+=m(b)+'" class="username"/></td>\n        </tr>\n    ';if((b=f["if"].call(d,d.groups,{hash:{},inverse:n.noop,fn:n.program(4,function(e,a){var b,c,d;d={hash:{},data:a};b='\n        <tr>\n            <td class="text"><strong>'+(m((c=f.L10n,c?c.call(e,"form.field.department",d):j.call(e,"L10n","form.field.department",d)))+'</strong></td>\n            <td>\n                <select name="group" style="min-width:200px;">\n                    ');
if((d=f.each.call(e,e.groups,{hash:{},inverse:n.noop,fn:n.program(5,q,a),data:a}))||0===d)b+=d;b+='\n                </select>\n            </td>\n        </tr>\n        <tr>\n            <td class="text"><strong>';d={hash:{},data:a};b+=m((c=f.L10n,c?c.call(e,"form.field.department.description",d):j.call(e,"L10n","form.field.department.description",d)))+'</strong></td>\n            <td class="text" id="groupDescription">\n                ';if((d=f.each.call(e,e.groups,{hash:{},inverse:n.noop,fn:n.program(8,
r,a),data:a}))||0===d)b+=d;return b+="\n            </td>\n        </tr>\n    "},c),data:c}))||0===b)a+=b;a+="\n        <tr>\n            <td><strong>";b={hash:{},data:c};a+=m((l=f.L10n,l?l.call(d,"form.field.message",b):j.call(d,"L10n","form.field.message",b)))+':</strong></td>\n            <td valign="top">\n                <textarea name="message" tabindex="0" cols="40" rows="5">';(b=f.message)?b=b.call(d,{hash:{},data:c}):(b=d.message,b=typeof b===k?b.apply(d):b);a+=m(b)+"</textarea>\n            </td>\n        </tr>\n    ";
if((b=f["if"].call(d,d.showCaptcha,{hash:{},inverse:n.noop,fn:n.program(11,function(){return'\n        <tr>\n            <td><img id="captcha-img" src="captcha.php"/></td>\n            <td><input type="text" name="captcha" size="50" maxlength="15" value="" class="username"/></td>\n        </tr>\n    '},c),data:c}))||0===b)a+=b;a+='\n    </table>\n    <a href="javascript:void(0);" class="but" id="send-message">';b={hash:{},data:c};return a+=m((l=f.L10n,l?l.call(d,"mailthread.perform",b):j.call(d,"L10n",
"mailthread.perform",b)))+'</a>\n    <div class="clear">&nbsp;</div>\n</form>\n<div id="ajax-loader"><img src="'+m((l=(l=d.page,null==l||!1===l?l:l.tplRoot),typeof l===k?l.apply(d):l))+'/images/ajax-loader.gif" alt="Loading..." /></div>'});s.leave_message_layout=r(function(a,d,f,b,c){function g(a){var b;return a=""+("\n                <a onclick=\"window.open('"+k((b=(b=a.page,null==b||!1===b?b:b.webimHost),typeof b===l?b.apply(a):b))+'\');return false;" href="'+k((b=(b=a.page,null==b||!1===b?b:b.webimHost),
typeof b===l?b.apply(a):b))+'">\n                    <img src="'+k((b=(b=(b=a.page,null==b||!1===b?b:b.company),null==b||!1===b?b:b.chatLogoURL),typeof b===l?b.apply(a):b))+'" alt=""/>\n                </a>\n            ')}function q(b){var a;return b=""+('\n                <img src="'+k((a=(a=(a=b.page,null==a||!1===a?a:a.company),null==a||!1===a?a:a.chatLogoURL),typeof a===l?a.apply(b):a))+'" alt=""/>\n            ')}function p(a){var b;return a=""+("\n                <a onclick=\"window.open('"+
k((b=(b=a.page,null==b||!1===b?b:b.webimHost),typeof b===l?b.apply(a):b))+'\');return false;" href="'+k((b=(b=a.page,null==b||!1===b?b:b.webimHost),typeof b===l?b.apply(a):b))+'">\n                    <img src="'+k((b=(b=a.page,null==b||!1===b?b:b.tplRoot),typeof b===l?b.apply(a):b))+'/images/default-logo.gif" alt=""/>\n                </a>\n            ')}function r(b){var a;return b=""+('\n                <img src="'+k((a=(a=b.page,null==a||!1===a?a:a.tplRoot),typeof a===l?a.apply(b):a))+'/images/default-logo.gif" alt=""/>\n            ')}
this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var h,l="function",k=this.escapeExpression,m=this;a='\n<div id="top2">\n    <div id="logo">\n        ';if((c=f["if"].call(d,(h=(h=d.page,null==h||!1===h?h:h.company),null==h||!1===h?h:h.chatLogoURL),{hash:{},inverse:m.program(6,function(b,a){var e,c,d;e="\n            ";if((d=f["if"].call(b,(c=b.page,null==c||!1===c?c:c.webimHost),{hash:{},inverse:m.program(9,r,a),fn:m.program(7,p,a),data:a}))||0===d)e+=d;return e+"\n        "},c),fn:m.program(1,
function(b,a){var e,c,d;e="\n            ";if((d=f["if"].call(b,(c=b.page,null==c||!1===c?c:c.webimHost),{hash:{},inverse:m.program(4,q,a),fn:m.program(2,g,a),data:a}))||0===d)e+=d;return e+"\n        "},c),data:c}))||0===c)a+=c;return a+='\n        &nbsp;\n        <div id="page-title">'+k((h=(h=d.page,null==h||!1===h?h:h.title),typeof h===l?h.apply(d):h))+'</div>\n        <div class="clear">&nbsp;</div>\n    </div>\n</div>\n\n\n<div id="headers">\n    <div class="wndb"><div class="wndl"><div class="wndr"><div class="wndt"><div class="wndtl"><div class="wndtr"><div class="wndbl"><div class="wndbr" id="description-region">\n    </div></div></div></div></div></div></div></div>\n</div>\n\n\n<div id="content-wrapper"></div>'});
s.leave_message_sent_description=r(function(a,d,f,b,c){this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var g,q=f.helperMissing,p=this.escapeExpression;b={hash:{},data:c};a='<div class="buttons">\n        <a href="javascript:window.close();" title="'+(p((g=f.L10n,g?g.call(d,"chat.mailthread.sent.close",b):q.call(d,"L10n","chat.mailthread.sent.close",b)))+'">\n            <img class="tpl-image iclosewin" src="'+p((g=(g=d.page,null==g||!1===g?g:g.webimRoot),"function"===typeof g?g.apply(d):
g))+'/images/free.gif" alt="');b={hash:{},data:c};a+=p((g=f.L10n,g?g.call(d,"chat.mailthread.sent.close",b):q.call(d,"L10n","chat.mailthread.sent.close",b)))+'" />\n        </a>\n</div>\n<div class="messagetxt">';b={hash:{},data:c};return a+=p((g=f.L10n,g?g.call(d,"leavemessage.sent.message",b):q.call(d,"L10n","leavemessage.sent.message",b)))+"</div>"});s.survey_form=r(function(a,d,f,b,c){function g(b,a){var e,c;e='<input type="hidden" name="group" value="';(c=f.groupId)?c=c.call(b,{hash:{},data:a}):
(c=b.groupId,c=typeof c===m?c.apply(b):c);return e+=n(c)+'"/>'}function q(b,a){var e,c,d;e=""+('\n                        <option value="'+n((c=b.id,typeof c===m?c.apply(b):c))+'" ');if((d=f["if"].call(b,b.selected,{hash:{},inverse:j.noop,fn:j.program(10,p,a),data:a}))||0===d)e+=d;e+=">"+n((c=b.name,typeof c===m?c.apply(b):c));if((d=f.unless.call(b,b.online,{hash:{},inverse:j.noop,fn:j.program(12,r,a),data:a}))||0===d)e+=d;return e+"</option>\n                    "}function p(){return'selected="selected"'}
function r(){return" (offline)"}function h(b,a){var e;return(e=f["if"].call(b,b.selected,{hash:{},inverse:j.noop,fn:j.program(15,l,a),data:a}))||0===e?e:""}function l(b){var a;return n((a=b.description,typeof a===m?a.apply(b):a))}this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var k,m="function",n=this.escapeExpression,j=this,e=f.helperMissing;a=""+('<form name="surveyForm" method="post" action="">\n    <input type="hidden" name="style" value="'+n((k=(k=d.page,null==k||!1===k?k:k.style),
typeof k===m?k.apply(d):k))+'"/>\n    <input type="hidden" name="info" value="');(b=f.info)?b=b.call(d,{hash:{},data:c}):(b=d.info,b=typeof b===m?b.apply(d):b);a+=n(b)+'"/>\n    <input type="hidden" name="referrer" value="';(b=f.referrer)?b=b.call(d,{hash:{},data:c}):(b=d.referrer,b=typeof b===m?b.apply(d):b);a+=n(b)+'"/>\n    <input type="hidden" name="survey" value="on"/>\n    ';if((b=f.unless.call(d,d.showEmail,{hash:{},inverse:j.noop,fn:j.program(1,function(b,a){var e,c;e='<input type="hidden" name="email" value="';
(c=f.email)?c=c.call(b,{hash:{},data:a}):(c=b.email,c=typeof c===m?c.apply(b):c);return e+=n(c)+'"/>'},c),data:c}))||0===b)a+=b;a+="\n    ";if((b=f.unless.call(d,d.groups,{hash:{},inverse:j.noop,fn:j.program(3,function(b,a){var e;return(e=f["if"].call(b,b.groupId,{hash:{},inverse:j.noop,fn:j.program(4,g,a),data:a}))||0===e?e:""},c),data:c}))||0===b)a+=b;a+="\n    ";if((b=f.unless.call(d,d.showMessage,{hash:{},inverse:j.noop,fn:j.program(6,function(b,a){var e,c;e='<input type="hidden" name="message" value="';
(c=f.message)?c=c.call(b,{hash:{},data:a}):(c=b.message,c=typeof c===m?c.apply(b):c);return e+=n(c)+'"/>'},c),data:c}))||0===b)a+=b;a+='\n\n    <div class="errors"></div>\n\n    <table class="form">\n    ';if((b=f["if"].call(d,d.groups,{hash:{},inverse:j.noop,fn:j.program(8,function(b,a){var c,d,g;g={hash:{},data:a};c="\n        <tr>\n            <td><strong>"+(n((d=f.L10n,d?d.call(b,"form.field.department",g):e.call(b,"L10n","form.field.department",g)))+'</strong></td>\n            <td>\n                <select name="group">\n                    ');
if((g=f.each.call(b,b.groups,{hash:{},inverse:j.noop,fn:j.program(9,q,a),data:a}))||0===g)c+=g;c+="\n                </select>\n            </td>\n        </tr>\n        <tr>\n            <td><strong>";g={hash:{},data:a};c+=n((d=f.L10n,d?d.call(b,"form.field.department.description",g):e.call(b,"L10n","form.field.department.description",g)))+'</strong></td>\n            <td id="groupDescription">';if((g=f.each.call(b,b.groups,{hash:{},inverse:j.noop,fn:j.program(14,h,a),data:a}))||0===g)c+=g;return c+=
"</td>\n        </tr>\n    "},c),data:c}))||0===b)a+=b;b={hash:{},data:c};a=a+"\n        <tr>\n            <td><strong>"+(n((k=f.L10n,k?k.call(d,"presurvey.name",b):e.call(d,"L10n","presurvey.name",b)))+'</strong></td>\n            <td><input type="text" name="name" size="50" value="');(b=f.name)?b=b.call(d,{hash:{},data:c}):(b=d.name,b=typeof b===m?b.apply(d):b);a+=n(b)+'" class="username" ';if((b=f.unless.call(d,d.canChangeName,{hash:{},inverse:j.noop,fn:j.program(17,function(){return'disabled="disabled"'},
c),data:c}))||0===b)a+=b;a+="/></td>\n        </tr>\n    ";if((b=f["if"].call(d,d.showEmail,{hash:{},inverse:j.noop,fn:j.program(19,function(b,a){var c,d;c={hash:{},data:a};c="\n        <tr>\n            <td><strong>"+(n((d=f.L10n,d?d.call(b,"presurvey.mail",c):e.call(b,"L10n","presurvey.mail",c)))+'</strong></td>\n            <td><input type="text" name="email" size="50" value="');(d=f.email)?d=d.call(b,{hash:{},data:a}):(d=b.email,d=typeof d===m?d.apply(b):d);return c+=n(d)+'" class="username"/></td>\n        </tr>\n    '},
c),data:c}))||0===b)a+=b;a+="\n    ";if((b=f["if"].call(d,d.showMessage,{hash:{},inverse:j.noop,fn:j.program(21,function(b,a){var c,d;c={hash:{},data:a};c="\n        <tr>\n            <td><strong>"+(n((d=f.L10n,d?d.call(b,"presurvey.question",c):e.call(b,"L10n","presurvey.question",c)))+'</strong></td>\n            <td valign="top"><textarea name="message" tabindex="0" cols="45" rows="2">');(d=f.message)?d=d.call(b,{hash:{},data:a}):(d=b.message,d=typeof d===m?d.apply(b):d);return c+=n(d)+"</textarea></td>\n        </tr>\n    "},
c),data:c}))||0===b)a+=b;a+='\n    </table>\n    <a href="javascript:void(0);" class="but" id="submit-survey">';b={hash:{},data:c};return a+=n((k=f.L10n,k?k.call(d,"presurvey.submit",b):e.call(d,"L10n","presurvey.submit",b)))+'</a>\n    <div class="clear">&nbsp;</div>\n</form>\n<div id="ajax-loader"><img src="'+n((k=(k=d.page,null==k||!1===k?k:k.tplRoot),typeof k===m?k.apply(d):k))+'/images/ajax-loader.gif" alt="Loading..." /></div>'});s.survey_layout=r(function(a,d,f,b,c){function g(b){var a;return b=
""+("\n                <a onclick=\"window.open('"+m((a=(a=b.page,null==a||!1===a?a:a.webimHost),typeof a===k?a.apply(b):a))+'\');return false;" href="'+m((a=(a=b.page,null==a||!1===a?a:a.webimHost),typeof a===k?a.apply(b):a))+'">\n                    <img src="'+m((a=(a=(a=b.page,null==a||!1===a?a:a.company),null==a||!1===a?a:a.chatLogoURL),typeof a===k?a.apply(b):a))+'" alt=""/>\n                </a>\n            ')}function q(a){var b;return a=""+('\n                <img src="'+m((b=(b=(b=a.page,
null==b||!1===b?b:b.company),null==b||!1===b?b:b.chatLogoURL),typeof b===k?b.apply(a):b))+'" alt=""/>\n            ')}function p(b){var a;return b=""+("\n                <a onclick=\"window.open('"+m((a=(a=b.page,null==a||!1===a?a:a.webimHost),typeof a===k?a.apply(b):a))+'\');return false;" href="'+m((a=(a=b.page,null==a||!1===a?a:a.webimHost),typeof a===k?a.apply(b):a))+'">\n                    <img src="'+m((a=(a=b.page,null==a||!1===a?a:a.tplRoot),typeof a===k?a.apply(b):a))+'/images/default-logo.gif" alt=""/>\n                </a>\n            ')}
function r(a){var b;return a=""+('\n                <img src="'+m((b=(b=a.page,null==b||!1===b?b:b.tplRoot),typeof b===k?b.apply(a):b))+'/images/default-logo.gif" alt=""/>\n            ')}this.compilerInfo=[3,">= 1.0.0-rc.4"];f=f||a.helpers;c=c||{};var h,l,k="function",m=this.escapeExpression,n=this;b=f.helperMissing;a='\n<div id="top2">\n    <div id="logo">\n        ';if((l=f["if"].call(d,(h=(h=d.page,null==h||!1===h?h:h.company),null==h||!1===h?h:h.chatLogoURL),{hash:{},inverse:n.program(6,function(a,
b){var c,d,g;c="\n            ";if((g=f["if"].call(a,(d=a.page,null==d||!1===d?d:d.webimHost),{hash:{},inverse:n.program(9,r,b),fn:n.program(7,p,b),data:b}))||0===g)c+=g;return c+"\n        "},c),fn:n.program(1,function(a,b){var c,d,h;c="\n            ";if((h=f["if"].call(a,(d=a.page,null==d||!1===d?d:d.webimHost),{hash:{},inverse:n.program(4,q,b),fn:n.program(2,g,b),data:b}))||0===h)c+=h;return c+"\n        "},c),data:c}))||0===l)a+=l;a+='\n        &nbsp;\n        <div id="page-title">'+m((h=(h=
d.page,null==h||!1===h?h:h.title),typeof h===k?h.apply(d):h))+'</div>\n        <div class="clear">&nbsp;</div>\n    </div>\n</div>\n\n\n<div id="headers">\n    <div class="wndb"><div class="wndl"><div class="wndr"><div class="wndt"><div class="wndtl"><div class="wndtr"><div class="wndbl"><div class="wndbr">\n        <div class="buttons">\n            <a href="javascript:window.close();" title="';l={hash:{},data:c};a+=m((h=f.L10n,h?h.call(d,"leavemessage.close",l):b.call(d,"L10n","leavemessage.close",
l)))+'"><img class="tpl-image iclosewin" src="'+m((h=(h=d.page,null==h||!1===h?h:h.webimRoot),typeof h===k?h.apply(d):h))+'/images/free.gif" alt="';l={hash:{},data:c};a+=m((h=f.L10n,h?h.call(d,"leavemessage.close",l):b.call(d,"L10n","leavemessage.close",l)))+'" /></a>\n        </div>\n        <div class="messagetxt">';l={hash:{},data:c};return a+=m((h=f.L10n,h?h.call(d,"presurvey.intro",l):b.call(d,"L10n","presurvey.intro",l)))+'</div>\n    </div></div></div></div></div></div></div></div>\n</div>\n\n\n<div id="content-wrapper"></div>'})})();
