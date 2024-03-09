 import { Server} from "socket.io";
 import Connection from "./databse/db.js";

 import { getDocument, updateDocument } from "./controller/document-controller.js";


 Connection();

 const io = new Server( 8000, {
    cors:{
        origin: "https://65ec737ac242b3b10db7002e--superb-mooncake-eff536.netlify.app/",
        methods: ['GET', 'POST']
    }
 });

 io.on('connection', socket => {
     socket.on ('get-document', async documentId =>{
        const document = await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document', document.data);

        socket.on('send-changes', delta => {
            socket.broadcast.to(documentId).emit('receive-changes', delta);
        })

        socket.on('save-document', async data =>{
            await updateDocument(documentId, data);
        })
    })
   
 });