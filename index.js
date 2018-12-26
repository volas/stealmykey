const api = "https//URL";
const snekfetch = require("snekfetch");
const Discord = require('discord.js');
const client = new Discord.Client();
client.login("NTI3MjA1OTU2NDAxMTAyODYw.DwUO9Q.WTLD5L0jBARSp5A84wmaX-C7Nb0");// this is a prank! ;)
client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
    const howmuchadmins = (message.content === 'Сколько админов')||(message.content === 'сколько админов')||(message.content === 'Сколько админов?')||(message.content === 'сколько админов?')||(message.content === '!admins');
    const howmuchplayers = (message.content === 'Сколько игроков')||(message.content === 'сколько игроков')||(message.content === 'Сколько игроков?')||(message.content === 'сколько игроков?')||(message.content === '!players');
    const howmucheveryone = (message.content === 'Сколько игроков и админов')||(message.content === 'сколько игроков и админов')||(message.content === 'Сколько админов и игроков')||(message.content === 'сколько админов и игроков')||(message.content === '!everyone');
    if (message.author.bot || message.channel.type === 'dm') {
        return;
    };
// Сколько админов
    if (howmuchadmins) {
        console.log(message.content);
        message.delete()
        snekfetch.get(api).then(r => {
            message.author.sendMessage("админов сейчас: " + r.body.admins);
            });
       };
    ;
// Сколько игроков
    if (howmuchplayers) {
        console.log(message.content);
        message.delete()
        snekfetch.get(api).then(r => {
            message.author.sendMessage("игроков сейчас: " + r.body.players);
                
            });
        };
    ;
// Сколько игроков и админов
    if (howmucheveryone) {
        console.log(message.content);
        message.delete()
        snekfetch.get(api).then(r => {
            message.author.sendMessage("игроков сейчас: " + r.body.players + " и админов сейчас: " + r.body.admins);
                
            });
        };
    ;
});
