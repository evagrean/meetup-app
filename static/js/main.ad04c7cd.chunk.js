(this["webpackJsonpmeetup-app"]=this["webpackJsonpmeetup-app"]||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),s=n.n(o),i=(n(24),n(2)),c=n(3),u=n(5),l=n(4),p=n(6),m=(n(25),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:!1},n.handleShowDetails=function(){!1===n.state.showDetails?n.setState({showDetails:!0}):n.setState({showDetails:!1})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event;return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"event-time"},t.local_time),r.a.createElement("div",{className:"event-date"},t.local_date),r.a.createElement("div",{className:"event-name"},t.name),r.a.createElement("div",{className:"group-name"},"Group: ",t.group.name),r.a.createElement("div",{className:"going"}," ",t.yes_rsvp_count," People are going"),!this.state.showDetails&&r.a.createElement("button",{className:"showDetailsButton",onClick:function(){return e.handleShowDetails()}},"Show Details"),this.state.showDetails&&r.a.createElement("button",{className:"showLessButton",onClick:function(){return e.handleShowDetails()}},"Show Less"),this.state.showDetails?r.a.createElement("div",{className:"details",dangerouslySetInnerHTML:{__html:t.description}}):null)}}]),t}(a.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{event:e}))})))}}]),t}(a.Component),d=n(7),f=n.n(d),v=[{created:1579702329e3,duration:72e5,id:"268111707",name:"How To Design Awesome CSS Components with Le Wagon",date_in_series_pattern:!1,status:"upcoming",time:15826518e5,local_date:"2020-02-25",local_time:"18:30",updated:1579702329e3,utc_offset:36e5,waitlist_count:0,yes_rsvp_count:7,group:{created:1574935324e3,name:"Le Wagon Munich - Coding Bootcamp",id:33056128,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Le-Wagon-Munich",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Le-Wagon-Munich/events/268111707/",description:"</p> <p>We look forward to meeting you soon!</p> <p>Team Le Wagon</p> ",visibility:"public",member_pay_fee:!1},{created:1580396975e3,duration:27e5,id:"268321786",name:"Product Management Live Chat by Sandboxx Chief Product Officer",date_in_series_pattern:!1,status:"upcoming",time:15868881e5,local_date:"2020-04-14",local_time:"20:15",updated:1580397318e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,group:{created:1570531441e3,name:"Product School Munich",id:32863959,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Product-School-Munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Product-School-Munich/events/268321786/",description:"<p>*Entrance not guaranteed without valid ticket from Eventbrite</p>",visibility:"public",member_pay_fee:!1},{created:1581324523e3,duration:54e5,id:"268599428",name:"First kick-off event",date_in_series_pattern:!1,status:"upcoming",time:15828228e5,local_date:"2020-02-27",local_time:"18:00",updated:1581324971e3,utc_offset:36e5,waitlist_count:0,yes_rsvp_count:17,group:{created:1573128374e3,name:"Microfrontends",id:32986964,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Microfrontends",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Microfrontends/events/268599428/",description:"<p>Dear Microfrontend friends,<br/>The time has come to organize our first kick-off event! The idea is to have the first one, just as a small get-together event, where I would really love to meet as much of you as possible and to hear more about your microfrontend projects/ideas, but also would like to use the opportunity to talk about the next, real, full-scale meetup event.</p> <p>The location will attach later after I see how many people want to attend, and depending on the interest, it might be a restaurant or might find some other location where we can have more space, in case of bigger interest.</p> <p>Once again short agenda:<br/>- Getting to know each other<br/>- Sharing microfrontend projects/ideas<br/>- Planning next, full-scale, meetup event</p> <p>I'm really excited and looking forward to meeting you all!!</p> ",visibility:"public",member_pay_fee:!1}],g=n(8),w=n.n(g);function _(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?b("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=tcnqekvs4ro9d4971mc04i23l7&response_type=code&redirect_uri=https://evagrean.github.io/meetup-app/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:b("renew",localStorage.getItem("refresh_token"))}function b(e,t){var n,a;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return"get"===e?n="https://qxlaue6cf1.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+t:"renew"===e&&(n="https://qxlaue6cf1.execute-api.eu-central-1.amazonaws.com/dev/api/refresh/"+t),r.next=3,f.a.awrap(w.a.get(n));case 3:return a=r.sent,localStorage.setItem("access_token",a.data.access_token),localStorage.setItem("refresh_token",a.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),r.abrupt("return",a.data.access_token);case 8:case"end":return r.stop()}}))}function y(e){var t,n,a;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.location.href.startsWith("http://localhost")){r.next=2;break}return r.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return r.next=4,f.a.awrap(_());case 4:if(!(t=r.sent)){r.next=11;break}return n="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+e+"&access_token="+t,r.next=9,f.a.awrap(w.a.get(n));case 9:return a=r.sent,r.abrupt("return",a.data);case 11:return r.abrupt("return",[]);case 12:case"end":return r.stop()}}))}function k(e,t){var n,a,r;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!window.location.href.startsWith("http://localhost")){o.next=2;break}return o.abrupt("return",v);case 2:return o.next=4,f.a.awrap(_());case 4:if(!(n=o.sent)){o.next=12;break}return a="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+n,e&&t&&(a+="&lat="+e+"&lon="+t),o.next=10,f.a.awrap(w.a.get(a));case 10:return r=o.sent,o.abrupt("return",r.data.events);case 12:case"end":return o.stop()}}))}var E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),y(t).then((function(e){return n.setState({suggestions:e})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,placeholder:"City",onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:32},n.handleInputChanged=function(e){var t=e.target.value;n.setState({numberOfEvents:t})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("label",null,"Specify number of events to show:"),r.a.createElement("input",{type:"text",className:"number",value:this.state.numberOfEvents,onChange:this.handleInputChanged}))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[]},n.updateEvents=function(e,t){k(e,t).then((function(e){return n.setState({events:e})}))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{updateEvents:this.updateEvents}),r.a.createElement(h,{events:this.state.events}),r.a.createElement(S,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ad04c7cd.chunk.js.map