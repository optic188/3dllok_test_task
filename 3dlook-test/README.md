the test task for 3d look 
To run the app
1. Clone the repo , it will be only one folder, 3dlook-test
2. Move into sub folder, 3dlook-test,  with package json
3. npm i -> npm run dev, after success check the localhost:3000 in u browser

What was done:
1. Pls check demo on Google drive https://drive.google.com/file/d/1h9BWaC8yIOSKnC4uaTN4FgmU1ln9QKHP/view
2. App with next js and ionic ui, on the single page u able to get list of to do items, remove each one and mark as done, it works only in local storage
2. As a store, Redux is using, and it's latest approach , that is recommended in the official doc, called Slice, as a middleware thunk, that is comming out of the box it @reduxjs/toolkit
3. Connecting next.js with ionic, main difficulties was that next js doesn't compile node_modules folder, and it's cause export error in browser. It was fixed by adding to next.config.js next-transpile-modules section.
4. Left 2 ts error, hope it wan't be critical 
5. url accepts userId params and useTaskActions was used.
6. There was a problem with styles from ionic, there were disappearing after page refresh. It was fixed by adding DynamicComponentWithNoSSR import. The idea is that with ssr styles loading before content.


