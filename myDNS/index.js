const dgram = require('dgram');


const server = dgram.createSocket('udp4');

const dnsPacket = require('dns-packet');

server.on('message', (msg, rinfo) => {
    const inComingPacket = dnsPacket.decode(msg);
    console.log({
        Questions: inComingPacket.questions,
        Answers: inComingPacket.answers,
        rinfo
    });
});

server.bind(53,() =>{
    console.log('DNS server is running on port 53');
})