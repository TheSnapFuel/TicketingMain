(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{31838:function(a,b,c){"use strict";c.d(b,{u:function(){return d}});var d="0x5FbDB2315678afecb367f032d93F642f64180aa3"},27137:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(828),e=c(85893),f=c(67294),g=c(39327),h=c(51649),i=c(22020),j=function(){var a={name:"Abhinav",image:"/images/profile.png",address:"0xruei..432",trades:"50+",tickets:5};return(0,e.jsx)(i.Z,{variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:0}},children:(0,e.jsxs)("div",{className:"p-4 rounded-3xl shadow-2xl shadow-[#1a1a1a] absolute z-1000 right-0 bg-[#2a2a2a] min-w-56 cursor-default",children:[(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsx)("div",{className:"w-16 h-16 rounded-lg mr-2",children:(0,e.jsx)("img",{src:a.image,className:"w-full h-full object-cover"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-lg",children:a.name}),(0,e.jsx)("p",{className:"text-sm text-[#716d6d] font-light",children:a.address})]})]}),(0,e.jsx)("hr",{className:"my-2"}),(0,e.jsx)("div",{className:"flex justify-center items-center px-4",children:[{name:"Trades",value:a.trades},{name:"Tickets",value:a.tickets},].map(function(a,b){var c=a.name,d=a.value;return(0,e.jsxs)("div",{className:"flex flex-col justify-center items-center mx-4",children:[(0,e.jsx)("p",{className:"font-light",children:c}),(0,e.jsx)("p",{className:"text-lg text-accent font-light",children:d})]},b)})}),(0,e.jsx)("hr",{className:"my-2"}),(0,e.jsx)("div",{className:"flex justify-around items-center pb-2 pt-4",children:[{label:"Wallet",icon:"/images/icons/Wallet.svg"},{label:"Settings",icon:"/images/icons/Settings.svg"},{label:"Logout",icon:"/images/icons/Logout.svg"},].map(function(a,b){var c=a.label,d=a.icon;return(0,e.jsxs)("div",{className:"flex flex-col justify-center items-center mx-2 cursor-pointer",children:[(0,e.jsx)("p",{className:"text-lg text-accent font-light",children:(0,e.jsx)("img",{src:d,className:"w-6 h-6 mb-2"})}),(0,e.jsx)("p",{className:"text-sm text-[#959595] font-light",children:c})]},b)})})]})})},k=function(a){var b=a.title,c=function(a){!a.target.closest(".".concat(n.current.className))&&l&&m(!1)},i={fontSize:"24px",cursor:"pointer"},k=(0,d.Z)(f.useState(!1),2),l=k[0],m=k[1],n=f.useRef(null);return f.useEffect(function(){return document.addEventListener("click",c),function(){document.removeEventListener("click",c)}}),(0,e.jsxs)("div",{className:"mx-4 flex justify-between z-30 relative",children:[(0,e.jsx)("div",{className:"my-auto",children:(0,e.jsx)("h1",{className:"text-3xl text-secondary",children:b})}),(0,e.jsxs)("div",{className:"flex align-middle",children:[(0,e.jsx)("div",{className:"mx-2 my-auto hover:text-accent transition duration-200 transform hover:scale-110",children:(0,e.jsx)(g.EaF,{style:i})}),(0,e.jsx)("div",{className:"mx-2 my-auto hover:text-accent transition duration-200 transform hover:scale-110",children:(0,e.jsx)(h.G58,{style:i})}),(0,e.jsx)("div",{className:"mx-2 my-auto transition duration-200 transform cursor-pointer",children:(0,e.jsxs)("div",{className:"dropdown",ref:n,style:{position:"relative",margin:"16px",width:"auto",display:"inline-block"},children:[(0,e.jsx)("div",{onClick:function(){return m(function(a){return!a})},children:(0,e.jsx)("img",{src:"/images/profile.png",className:"w-16 h-16 rounded-lg shadow-sm"})}),l&&(0,e.jsx)(j,{setOpen:m})]})})]})]})}},22020:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(828),e=c(85893),f=c(46513),g=c(31548),h=c(67294),i=c(97650);function j(a){var b=a.children,c=a.variants,j=a.resetAnimation,k=void 0!==j&&j,l=a.classNames,m=(0,f._)(),n=(0,d.Z)((0,i.YD)(),2),o=n[0],p=n[1],q=(0,h.useState)(!1),r=q[0],s=q[1];return(0,h.useEffect)(function(){(!r||k)&&(p&&(m.start("visible"),s(!0)),p||m.start("hidden"))},[m,p]),(0,e.jsx)(g.E.div,{ref:o,animate:m,initial:"hidden",variants:c||{visible:{opacity:1,scale:1,transition:{delay:.4}},hidden:{opacity:0,scale:0}},className:void 0===l?"":l,children:b})}},88677:function(){},62808:function(){},4150:function(a){"use strict";a.exports=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"string","name":"updatedURI","type":"string"},{"internalType":"uint256","name":"numTickets","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"addEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchEvents","outputs":[{"components":[{"internalType":"uint256","name":"eventId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"ticketsIDStart","type":"uint256"},{"internalType":"uint256","name":"ticketsCount","type":"uint256"}],"internalType":"struct MassEvent.EventItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"getEventTickets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEvents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalTickets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]}')}}])