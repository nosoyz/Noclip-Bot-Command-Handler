// NOCLIP BOT BY ZDRAR //
//  NO COPY & PASTE    //
//   FREE DOWNLOAD ?¿  //

const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const fs = require("fs");
const discord = require("discord.js")
const client = new Client({
    disableEveryone: true
})
client.commands = new discord.Collection()
client.queue = new Map();
client.vote = new Map();
client.commands = new Collection();
client.aliases = new Collection();
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})

//Estado del bot

client.once('ready', () => {
console.log('NoClip ON');
let statuses = [
'[🎬] NoClip | v2',
'[🛠] .help',
`[💿] ${client.users.cache.size} Usuarios`,
`[📀] ${client.guilds.cache.size} Servidores`
];
setInterval(function() {
let status = statuses[Math.floor(Math.random() * statuses.length)];
client.user.setActivity(status, { type: 'WATCHING' });
}, 5000);
})

client.on("message", async message => {

  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (!message.content.startsWith(prefix)) return;

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) 
    command.run(client, message, args);

    return addexp(message)
})

//GLOBAL CHAT //BETA

client.on("message", async message => { 
 if (message.author.bot) return;
let canal = client.channels.cache.filter(c => c.name == "noclipchat");

  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL())
  .setFooter("Enviado desde " + message.guild.name, message.guild.iconURL())
  .setDescription(message)
  .setColor("RANDOM")
  .setTimestamp()
 const array = ["discord.gg", "discord.me", "discord.io/", "discordapp.com/invite", "https:", ".com", ".net"]
 if(message.channel.name == "noclipchat"){
 if(array.some(word =>

    message.content.toLowerCase().includes(word))){
    message.delete()

    message.reply(' `----------------------`').then(response =>{

    response.delete(5000) 
      
                });
}else{
canal.forEach(m => {
client.channels.resolve(m.id).send(embed) 

         });
    }
    }
    if(!message.channel.name == "noclipchat") return;
                   


  if(message.channel.name == "noclipchat") return message.delete()
});


client.login(token);

// NOCLIP BOT BY ZDRAR //
//  NO COPY & PASTE    //
//   FREE DOWNLOAD ?¿  //
