export default function connection(socket) {
    console.log(`new connection`);
    socket.on("end", () => {
        console.log("Client disconnected");
    });
  
    socket.on("error", (error) => {
        console.log(`Socket Error: ${error.message}`);
    });
    socket.on("data", (data) => {
        console.log(data);
    });

}