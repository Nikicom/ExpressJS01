!function(e){var a={};function i(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,a,r){i.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="https://a.trellocdn.com/prgb/dist/",i(i.s="I0jX")}({I0jX:function(e,a,i){var r,o,n,d,t,s=i("Ueyl");n=function(e){try{return window.JSON.parse(e)}catch(e){return e,null}},r=function(e,a){var i;(i=new XMLHttpRequest).open("GET",e,!0),i.setRequestHeader("Accept","application/json,text/plain"),i.setRequestHeader("X-Trello-Client-Version",window.clientVersion||"quickload"),i.onreadystatechange=function(){4===i.readyState&&(200!==i.status?a([i.status,i.responseText]):a(null,[n(i.responseText),i]))},i.send(null)},o=function(e,a){var i,r,o,n,d,t,s,l;for(null==a&&(a={}),r=[],o=/invite-token-[-a-f0-9]*=([^;]+)/g;null!=(s=null!=(d=o.exec(document.cookie))?d[1]:void 0);)r.push(unescape(s));return r.length>0&&(a.invitationTokens=r.join(",")),/^\/1\/search(\/|$)/.test(e)&&(i=null!=(t=/dsc=([^;]+)/.exec(document.cookie))?t[1]:void 0,a.dsc=i),[e,function(){var e;for(n in e=[],a)l=a[n],e.push([n,encodeURIComponent(l)].join("="));return e}().join("&")].join("?")},d=location.pathname.substr(1),(t={init:function(){var e,a,i,r;if(t.preloads={},/token/.test(document.cookie))for(e=0,a=(i=[o("/1/Members/me",s.memberHeader)].concat(t.getDataUrls())).length;e<a;e++)r=i[e],t.preload(r)},getDataUrls:function(){var e,a,i,r,n,t,l,c,m,u;return""===d?[o("/1/Members/me",s.memberBoards)]:null!=(u=null!=(r=/^\/([^\/]*)/.exec(d))?r[1]:void 0)?(u=decodeURIComponent(u).toLowerCase().replace(/[-_ ]+/g," "))?[o("/1/Members/me",s.memberQuickBoards),o("/1/search",s.quickBoardsSearch(u))]:[o("/1/Members/me",s.memberQuickBoards)]:null!=(e=null!=(n=null!=(t=/^b\/([^\/]+)/.exec(d))?t[1]:void 0)?n:null!=(l=/^board\/[^\/]+\/([^\/]+)/.exec(d))?l[1]:void 0)?[o("/1/Boards/"+e,s.currentBoardMinimal),o("/1/Boards/"+e,s.currentBoardSecondary),o("/1/Boards/"+e,s.currentBoardPluginData)]:null!=(a=null!=(c=/^c\/([^\/]+)/.exec(d))?c[1]:void 0)?[o("/1/Cards/"+a,s.card)]:null!=(i=null!=(m=/^([^\/]+)$/.exec(d))?m[1]:void 0)?[o("/1/Organizations/"+i,s.organizationBoardsPage)]:[]},preload:function(e){var a;e&&(a={isLoading:!0,callbacks:[],start:Date.now(),used:!1,url:e},t.preloads[e]=a,r(e,function(i,r){var o,n,d,s,l,c;if(a.isLoading=!1,i)for(a.error=i,o=0,d=(l=a.callbacks).length;o<d;o++)(0,l[o])(i);else{for(a.data=r,n=0,s=(c=a.callbacks).length;n<s;n++)(0,c[n])(null,r);setTimeout(function(){return t.removePreload(e)},1e4)}}))},removePreload:function(e){var a,i,r;if(e in t.preloads){for(a=0,i=(r=t.removeFns).length;a<i;a++)(0,r[a])(t._cleanPreload(t.preloads[e]));return delete t.preloads[e]}},_cleanPreload:function(e){var a,i,r,o,n;for(a={},i=0,o=(n=["isLoading","start","used","url"]).length;i<o;i++)a[r=n[i]]=e[r];return a},removeFns:[],onRemove:function(e){return t.removeFns.push(e)},makeUrl:o,load:function(e,a){var i;if(null!=(i=t.preloads[e]))return i.used=!0,i.isLoading?i.callbacks.push(a):(a(i.error,i.data),t.removePreload(e)),t._cleanPreload(i);r(e,a)},clear:function(){var e;for(e in t)t.removePreload(e)}}).init(),e.exports=window.QuickLoad=t},Ueyl:function(e,a){var i;e.exports=i={},i.boardFieldsMinimal=["name","closed","dateLastActivity","dateLastView","datePluginDisable","idOrganization","prefs","shortLink","shortUrl","url"].join(","),i.boardFieldsFull=[i.boardFieldsMinimal,"desc","descData","idTags","invitations","invited","labelNames","limits","memberships","powerUps","subscribed"].join(","),i.boardFieldsMinimalSubscribed=[i.boardFieldsMinimal,"subscribed"].join(","),i.memberFields=["fullName","initials","idEnterprise","memberType","username","avatarHash","bio","bioData","confirmed","products","url"].join(","),i.memberFieldsStatus=[i.memberFields,"status"].join(","),i.memberFieldsAndPremOrgsAdmin=[i.memberFields,"idPremOrgsAdmin"].join(","),i.organizationFieldsMinimal=["name","displayName","products","prefs","logoHash","idEnterprise","tags"].join(","),i.organizationFieldsMinimalMemberships=[i.organizationFieldsMinimal,"memberships"].join(","),i.cardFieldsBulk=["badges","closed","dateLastActivity","desc","descData","due","dueComplete","idAttachmentCover","idList","idBoard","idMembers","idShort","idLabels","limits","name","pos","shortUrl","shortLink","subscribed","url"].join(","),i.boardFieldsInOrganization=[i.boardFieldsMinimal,"idTags"].join(","),i.organizationBoardsFields=[i.organizationFieldsMinimal,"desc","descData","website","limits"].join(","),i.cardActions=["addAttachmentToCard","addChecklistToCard","addMemberToCard","commentCard","copyCommentCard","convertToCardFromCheckItem","createCard","copyCard","deleteAttachmentFromCard","emailCard","moveCardFromBoard","moveCardToBoard","removeChecklistFromCard","removeMemberFromCard","updateCard:idList","updateCard:closed","updateCard:due","updateCard:dueComplete","updateCheckItemStateOnCard","updateCustomFieldItem"].join(","),i.boardActions=[i.cardActions,"addMemberToBoard","addToOrganizationBoard","copyBoard","createBoard","createCustomField","createList","deleteCard","deleteCustomField","disablePlugin","disablePowerUp","enablePlugin","enablePowerUp","makeAdminOfBoard","makeNormalMemberOfBoard","makeObserverOfBoard","moveListFromBoard","moveListToBoard","removeFromOrganizationBoard","unconfirmedBoardInvitation","unconfirmedOrganizationInvitation","updateBoard","updateCustomField","updateList:closed"].join(","),i.card={fields:"all",stickers:!0,attachments:!0,customFieldItems:!0,pluginData:!0},i.currentBoardMinimal={lists:"open",list_fields:"name,closed,idBoard,pos,subscribed,limits",cards:"visible",card_attachments:"cover",card_stickers:!0,card_fields:[i.cardFieldsBulk,"labels"].join(","),card_checklists:"none",members:"all",member_fields:i.memberFieldsStatus,membersInvited:"all",membersInvited_fields:i.memberFields,memberships_orgMemberType:!0,checklists:"none",organization:!0,organization_fields:"name,displayName,desc,descData,url,website,prefs,memberships,logoHash,products,limits",organization_tags:!0,myPrefs:!0,fields:i.boardFieldsFull},i.currentBoardSecondary={fields:"",actions:i.boardActions,actions_display:!0,actions_limit:50,action_memberCreator_fields:i.memberFieldsAndPremOrgsAdmin,action_reactions:!0,checklists:"none",cards:"visible",card_fields:"",card_checklists:"all",card_checklist_checkItems:"none",labels:"all",labels_limit:1e3},i.currentBoardPluginData={fields:"",boardPlugins:!0,cards:"visible",card_fields:"",card_attachments:!0,card_attachment_fields:"bytes,date,edgeColor,idMember,isUpload,mimeType,name,url",card_customFieldItems:!0,customFields:!0,pluginData:!0,card_pluginData:!0,organization:!0,organization_fields:"",organization_pluginData:!0},i.memberBoards={boards:"open,starred",board_fields:i.boardFieldsMinimalSubscribed,boardStars:!0,boardsInvited:"all",boardsInvited_fields:i.boardFieldsMinimalSubscribed,board_organization:!0,board_organization_fields:i.organizationFieldsMinimal,credits:"invitation,promoCode",organizations:"all",organization_fields:i.organizationFieldsMinimalMemberships,organizationsInvited:"all",organizationsInvited_fields:i.organizationFieldsMinimal,paid_account:!0},i.memberHeader={channels:!0,organizations:"all",organization_paid_account:!0,organization_fields:"name,displayName,idEnterprise",organization_enterprise:!0,paid_account:!0,pluginData:!0,savedSearches:!0,missedTransferDate:!0,enterprises:!0,enterprise_filter:["saml","member","member-unconfirmed"]},i.organizationBoardsPage={boards:"open",board_fields:i.boardFieldsInOrganization,board_starCounts:"organization",board_membershipCounts:"active",fields:i.organizationBoardsFields,paid_account:!0,memberships:"active",members:"all",tags:!0},i.memberQuickBoards={fields:"idOrganizations",boards:"open,starred",board_fields:i.boardFieldsMinimal,boardStars:!0,organizations:"all",organization_fields:"idBoards"},i.quickBoardsSearch=function(e){return{query:e,modelTypes:"boards",board_fields:i.boardFieldsMinimal,partial:!0}}}});
//# sourceMappingURL=quickload.eeb9abeefeb51e34ea16.js.map