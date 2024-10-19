const { Events, Client, Interaction, InteractionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, GatewayIntentBits  } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const axios = require('axios');
const jq = new ButtonBuilder()
	.setCustomId('jqueue')
	.setLabel('join queue')
	.setStyle(ButtonStyle.Success);
const dq = new ButtonBuilder()
	.setCustomId('dqueue')
	.setLabel('leave queue')
	.setStyle(ButtonStyle.Danger);
const row = new ActionRowBuilder()
.addComponents(jq, dq);
const rc = new ButtonBuilder()
.setCustomId('ready')
.setLabel('readycheck')
.setStyle(ButtonStyle.Success);
const readied = new ActionRowBuilder()
.addComponents(rc);

const siren = new ButtonBuilder()
.setCustomId('siren')
.setLabel('Sirens strand')
.setStyle(ButtonStyle.Primary);
const reef = new ButtonBuilder()
.setCustomId('reef')
.setLabel('Ghost reef')
.setStyle(ButtonStyle.Primary);
const sanctum = new ButtonBuilder()
.setCustomId('sanctum')
.setLabel('Sanctum falls')
.setStyle(ButtonStyle.Primary);
const ember = new ButtonBuilder()
.setCustomId('ember')
.setLabel('Embergrove')
.setStyle(ButtonStyle.Primary);
const mapvote = new ActionRowBuilder()
.addComponents(siren, reef, sanctum, ember);

const fin = new ButtonBuilder()
.setCustomId('finished')
.setLabel('GG <3 match finished')
.setStyle(ButtonStyle.Success);
const drop = new ButtonBuilder()
.setCustomId('drop')
.setLabel('Dropout of queue')
.setStyle(ButtonStyle.Danger);
const games = new ActionRowBuilder()
.addComponents(fin, drop);

const setup = new ButtonBuilder()
.setCustomId('setup')
.setLabel('setup server')
.setStyle(ButtonStyle.Primary);
const setted = new ActionRowBuilder()
.addComponents(setup);
const c1 = new StringSelectMenuBuilder()
.setCustomId('Creature1')
.setPlaceholder('Choose creatures!')
.setMinValues(3)
.setMaxValues(3)
.addOptions(
    new StringSelectMenuOptionBuilder()
        .setLabel('Summer bloomer')
        .setValue('DefaultMinionLoadout[0] = EntBaby, DefaultMinionLoadout[3] = EntAdult'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Winter bloomer')
        .setValue('DefaultMinionLoadout[0] = EntBaby_Winter, DefaultMinionLoadout[3] = EntWinter'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Spring bloomer')
        .setValue('DefaultMinionLoadout[0] = EntBaby_Spring, DefaultMinionLoadout[3] = EntSpring'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Autumn bloomer')
        .setValue('DefaultMinionLoadout[0] = EntBaby_Fall, DefaultMinionLoadout[3] = EntFall'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Mountain cyclops')
        .setValue('DefaultMinionLoadout[0] = CyclopsBaby, DefaultMinionLoadout[3] = CyclopsAdult'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Yeti "cyclops"')
        .setValue('DefaultMinionLoadout[0]= CyclopsBaby_Frost, DefaultMinionLoadout[3] = CyclopsFrost'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Riftborn cyclops')
        .setValue('DefaultMinionLoadout[0] = CyclopsBaby_Magic, DefaultMinionLoadout[3] = CyclopsMagic'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Cerberus majoris')
        .setValue('DefaultMinionLoadout[0] = CerberusBaby, DefaultMinionLoadout[3] = CerberusAdult'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Shadow cerberus')
        .setValue('DefaultMinionLoadout[0] = CerberusBaby_Shadow, DefaultMinionLoadout[3] = CerberusShadow'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Stone cerberus')
        .setValue('DefaultMinionLoadout[0] = CerberusBaby_Tough, DefaultMinionLoadout[3] = CerberusTough'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Fire drake')
        .setValue('DefaultMinionLoadout[0] = DragonBaby, DefaultMinionLoadout[3] = DragonAdult'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Storm drake')
        .setValue('DefaultMinionLoadout[0] = DragonBaby_Storm, DefaultMinionLoadout[3] = DragonStorm'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Ancient obelisk')
        .setValue('DefaultMinionLoadout[0] = ObeliskBaby, DefaultMinionLoadout[3] = ObeliskAdult'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Crimson infernal')
        .setValue('DefaultMinionLoadout[0] = DemonBaby, DefaultMinionLoadout[3] = DemonAdult'),
)
const maps = new StringSelectMenuBuilder()
.setCustomId('mapped')
.setPlaceholder('Choose a map')
.addOptions(
    new StringSelectMenuOptionBuilder()
        .setLabel('Ghost reef')
        .setValue('Lv_canyon'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Sirens strand')
        .setValue('Lv_valley'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Sanctum falls')
        .setValue('LV_mistforge'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Embergrove')
        .setValue('LV_wizardwoods'),
)
const serverlocation = new StringSelectMenuBuilder()
.setCustomId('serv')
.setPlaceholder('Choose a server')
.addOptions(
    new StringSelectMenuOptionBuilder()
        .setLabel('trippgap')
        .setValue('trippgap.servegame.com'),
        new StringSelectMenuOptionBuilder()
        .setLabel('localhost')
        .setValue('localhost:7777'),
)
const server = new ActionRowBuilder()
.addComponents(serverlocation);
const map = new ActionRowBuilder()
.addComponents(maps);
const creature1 = new ActionRowBuilder()
.addComponents(c1);

const str = new ButtonBuilder()
.setCustomId('strt')
.setLabel('start server')
.setStyle(ButtonStyle.Primary);
const start = new ActionRowBuilder()
.addComponents(str);

async function sendData1(var1) {
    const data = {
        "variable1": var1

    };
    try {
        web = var1[0]
        const response = await axios.post('http://'+web+'/data', data);
        console.log('Response from server:', response.data);
        return response.data; // Return response to be used later
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

function selectcreature(i, length){
    var result = []
    var count = 0
    for (b=0;b<length;b++) {
        var ac3=Number(count) + 3
        switch(i.values[b]) {
        case "DefaultMinionLoadout[0] = EntBaby, DefaultMinionLoadout[3] = EntAdult":
            result.push("DefaultMinionLoadout["+count+"]=EntBaby, DefaultMinionLoadout["+ ac3 +"] = EntAdult")

            count = count+1
        break;
        case "DefaultMinionLoadout[0] = EntBaby_Winter, DefaultMinionLoadout[3] = EntWinter":
            result.push("DefaultMinionLoadout["+count+"] = EntBaby_Winter, DefaultMinionLoadout["+ac3+"] = EntWinter"
)
            count = count+1
        break;
        case "DefaultMinionLoadout[0] = EntBaby_Spring, DefaultMinionLoadout[3] = EntSpring":
            result.push("DefaultMinionLoadout["+count+"] = EntBaby_Spring, DefaultMinionLoadout["+ac3+"] = EntSpring"
 )
            count = count+1
        break;
        case "DefaultMinionLoadout[0] = EntBaby_Fall, DefaultMinionLoadout[3] = EntFall":
            result.push("DefaultMinionLoadout["+count+"] = EntBaby_Fall, DefaultMinionLoadout["+ac3+"] = EntFall"
)
            count = count+1
        break;
        case "DefaultMinionLoadout[0] = CyclopsBaby, DefaultMinionLoadout[3] = CyclopsAdult":
            result.push("DefaultMinionLoadout["+count+"] = CyclopsBaby, DefaultMinionLoadout["+ac3+"] = CyclopsAdult"
)
            count = count+1
        break;
        case "DefaultMinionLoadout[0]= CyclopsBaby_Frost, DefaultMinionLoadout[3] = CyclopsFrost":
            result.push("DefaultMinionLoadout["+count+"]= CyclopsBaby_Frost, DefaultMinionLoadout["+ac3+"] = CyclopsFrost"
)
            count = count+1
        break;
        case "DefaultMinionLoadout[0] = CyclopsBaby_Magic, DefaultMinionLoadout[3] = CyclopsMagic":
            result.push("DefaultMinionLoadout["+count+"] = CyclopsBaby_Magic, DefaultMinionLoadout["+ac3+"] = CyclopsMagic"
)
            count = count+1
        break;
        case "DefaultMinionLoadout[0] = CerberusBaby, DefaultMinionLoadout[3] = CerberusAdult":
            result.push("DefaultMinionLoadout["+count+"] = CerberusBaby, DefaultMinionLoadout["+ac3+"] = CerberusAdult"
)
            count = count+1

        break;
        case "DefaultMinionLoadout[0] = CerberusBaby_Shadow, DefaultMinionLoadout[3] = CerberusShadow":
            result.push("DefaultMinionLoadout["+count+"] = CerberusBaby_Shadow, DefaultMinionLoadout["+ac3+"] = CerberusShadow"
)
            count = count+1
        break;
        case "DefaultMinionLoadout[0] = CerberusBaby_Tough, DefaultMinionLoadout[3] = CerberusTough":
            result.push("DefaultMinionLoadout["+count+"] = CerberusBaby_Tough, DefaultMinionLoadout["+ac3+"] = CerberusTough"
)
            count = count+1
        break;
        case "DefaultMinionLoadout[0] = DragonBaby, DefaultMinionLoadout[3] = DragonAdult":
            result.push("DefaultMinionLoadout["+count+"] = DragonBaby, DefaultMinionLoadout["+ac3+"] = DragonAdult"
)
            count = count+1
        break;
        case "DefaultMinionLoadout[0] = DragonBaby_Storm, DefaultMinionLoadout[3] = DragonStorm":
            result.push("DefaultMinionLoadout["+count+"] = DragonBaby_Storm, DefaultMinionLoadout["+ac3+"] = DragonStorm"
)
            count = count+1
        break;
        case "DefaultMinionLoadout[0] = ObeliskBaby, DefaultMinionLoadout[3] = ObeliskAdult":
            result.push("DefaultMinionLoadout["+count+"] = ObeliskBaby, DefaultMinionLoadout["+ac3+"] = ObeliskAdult")
            count = count+1

        break;
        case "DefaultMinionLoadout[0] = DemonBaby, DefaultMinionLoadout[3] = DemonAdult":
            result.push("DefaultMinionLoadout["+count+"] = DemonBaby, DefaultMinionLoadout["+ac3+"] = DemonAdult"
            )
            count = count+1
        break;
        case "trippgap.servegame.com":
            result.push("trippgap.servegame.com")
        break;
        case "localhost:7777":
            result.push("localhost:7777")
        break;
    }
  
} 
    console.log(result)
    return result
    console.log('wait it actually works', result)
}

function selectserver(i){
    servvar = ''
    switch(i.values[0]) {
        case "trippgap.servegame.com":
            servvar = "trippgap.servegame.com"
        break;
        case "localhost:7777":
            servvar = "localhost:7777"
        break;
        }
        console.log(servvar)
        return servvar
}



    var vals = []
    var vars = []
    let setter = null
    var inqueue = []
    var idqueue = []
    var addqueue2 = []
    var mapvoters = []
    var sanctumvoters = []
    var embervoters = []
    var reefvoters = []
    var sirenvoters = []
    var iddqueue1 = []
    var inqueue1 = []
    var addqueue = []
    var reinqueue = []
    var sivote = 0
    var revote = 0
    var savote = 0
    var emvote = 0
    var mavote = 0
    var actmap = ''
    var textmap = ''
    var maxqueue = 10
module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
        
        console.log(idqueue)
        if (interaction.customId === 'jqueue') {
            console.log('buttonclicked')
            if (idqueue.includes(interaction.user.id) == false){
                inqueue.push(interaction.user.username)
                idqueue.push(interaction.user.id)
                addqueue1 = idqueue.map(name => `<@${name}>`)
                addqueue = idqueue.map(name => `<@${name}>`)
            }

            if (idqueue.length == maxqueue){
                console.log('full queue')
                console.log(inqueue)
                addqueue1 = idqueue.map(name => `<@${name}>`)
                console.log(addqueue2)
                await interaction.update({content: ` Queue is full, ready up.\nreadied: \n ${addqueue2} \nnot readied:\n${addqueue1}`, components: [readied] });
                await interaction.followUp(`${addqueue}`)
                interaction.channel.messages.fetch({ limit: 1 }).then(messages => {
                    let lastMessage = messages.first();
                    lastMessage.delete()
                })
                allready = setTimeout(async () => {
                    console.log('id',idqueue,'idd', iddqueue1)
                    vals.length = 0
                    setter = null
                    inqueue = inqueue1.slice()
                    idqueue = iddqueue1.slice()
                    addqueue = idqueue.map(name => `<@${name}>`)
                    addqueue2.length = 0
                    mapvoters.length = 0
                    inqueue1.length = 0
                    iddqueue1.length = 0
                    console.log(idqueue)
                    await interaction.editReply({
                        content: `${idqueue.length}/10 people in queue: ${addqueue}`,
                        components: [row] // Optionally remove components
                    });

                }, 60000); // 10000 ms = 10 seconds;
            } else {
                addqueue = idqueue.map(name => `<@${name}>`)
            await  interaction.update({content: `${idqueue.length}/10 people in queue: ${addqueue}`, components: [row] });
           
            }
        } else if (interaction.customId === 'dqueue') {
            var index = inqueue.indexOf(interaction.user.username)
            if (index > -1) {
                inqueue.splice(index);
            }
            var idex = idqueue.indexOf(interaction.user.id)
            console.log(idex)
            if (idex > -1) {
                idqueue.splice(idex, 1);
            }
            addqueue = idqueue.map(name => `<@${name}>`)
            interaction.update({content: `${idqueue.length}/10 people in queue: ${addqueue}`, components: [row] });
        }
        if (interaction.customId === 'ready') {
            if (idqueue.includes(interaction.user.id)==true){
            console.log(idqueue)
            if (idqueue.length == 0){
                console.log('everyone readied')
            } else {
                console.log(iddqueue1, 'emptor')
                iddqueue1.push(idqueue[idqueue.indexOf(interaction.user.id)])
                console.log('queue',iddqueue1)
                inqueue1.push(inqueue[inqueue.indexOf(interaction.user.username)])
                addqueue2.push("<@"+idqueue[idqueue.indexOf(interaction.user.id)]+">")
            const index = idqueue.indexOf(interaction.user.id);
            if (index > -1) { // only splice array when item is found
                idqueue.splice(index, 1); // 2nd parameter means remove one item only
            }
            console.log('soulb be empty', idqueue)
            var addqueue1 = idqueue.map(name => `<@${name}>`)
            console.log('still emp', addqueue1)
            await interaction.update({content: ` Queue is full, ready up.\nreadied: \n ${addqueue2} \nnot readied:\n${addqueue1}`, components: [readied] });}
            if (idqueue.length==0){
                mapvoters = iddqueue1.slice()
                console.log(mapvoters)
                clearTimeout(allready)
                await interaction.editReply({content: `Everyone's ready, vote for a map.\nsirens strand: ${sivote}\nGhost reef: ${revote}\nSanctum falls: ${savote}\nEmber grove: ${emvote}`, components: [mapvote] }); 
                //await interaction.editReply({content: `Everyone ready, someone set up the server`, components: [setted] }); 
                mapwait = setTimeout(async () => {
                    
                        if (sivote >= revote && sivote >= savote && sivote >= emvote) {
                        await interaction.editReply({
                        content: `playing sirensstrand`,
                        components: [setted]
                    });
                    textmap = 'Sirens strand'
                    actmap = 'LV_valley'
                }
                        if (revote > sivote && revote >= savote && revote >= emvote) {
                            await interaction.editReply({
                            content: `playing ghostreef`,
                            components: [setted]
                        });
                        textmap = 'Ghost reef'
                        actmap = 'LV_canyon'
                    }
                        if (savote > revote && savote > sivote && savote > emvote) {
                            await interaction.editReply({
                            content: `playing sanctum falls`,
                            components: [setted]
                        });
                        textmap = 'Sanctum falls'
                        actmap = 'LV_mistforge'
                    }
                        if (emvote > revote && emvote >= savote && emvote > sivote) {
                            await interaction.editReply({
                            content: `playing ember grove`,
                            components: [setted]
                        });
                        textmap = 'Embergrove'
                        actmap = 'LV_wizardwoods'
                    }
                    sivote = 0
                    revote = 0
                    savote = 0
                    emvote = 0
                }, 30000);
            }
            }
        }
            
        if (interaction.customId === 'setup') {

                c=0
                setter = "<@"+interaction.user.id+">"
                await interaction.update({content: `${setter} is setting up the server`,components:[]});
                const setup = await interaction.followUp({content: `Choose a host for the server and 3 creatures.`, components: [ server, creature1], ephemeral: true });
                const setup2 = await interaction.followUp({content: ``, components: [start], ephemeral: true });
                const collector = setup.createMessageComponentCollector({});
                collector.on('collect', async (i) => {
                

                 
                cre = selectcreature(i, i.values.length)
                b=Number(c)-1
                 if (vals.length == 0){
                    vals.push(cre)
                 } else if (cre.length == vals[c].length){
                    const index = vals[c];
                    console.log('removing', vals[c])
                    vals.splice(c, 1); 
                    vals.push(cre)
                    console.log('post removal', vals)
                    console.log(b,'after update',vals)
                 } else if (cre.length==vals[0].length){
                    vals.splice(b, 1); 
                    vals.push(cre)
                    console.log('after first update',vals)
                 } else {
                    vals.push(cre)
                    c = c+1
                    console.log('no update',vals)
                    console.log(c)
                 }
                await i.deferUpdate()
                /*console.log('creatuers',vals,'cre', cre)
                web = selectserver(i)
                
                console.log(cre,'s',web)*/
                    /*console.log(i.values)  
                vals.push(i.values)  
                    //await i.reply({content: `you have selected ${selection}!`, ephemeral: true});
                    //vals.push(selection)
                    console.log(vals)*/
                })

        }
        if (interaction.customId === 'strt') {
                await interaction.update({content:'server started', components:[]})
                vals.push(actmap)
                if (vals[0].length==3){
                    vars[0] = vals[1][0] // set server
                    vars[1] = vals[2] // send map
                    vars[2] = vals[0][0] // send creature1
                    vars[3] = vals[0][1] // send creature2
                    vars[4] = vals[0][2] // send creature3
                    console.log('s',vars,'e')
                }
                if (vals[0].length==1){
                    vars[0] = vals[0][0] // set server
                    vars[1] = vals[2] // send map
                    vars[2] = vals[1][0] // send creature1
                    vars[3] = vals[1][1] // send creature2
                    vars[4] = vals[1][2] // send creature3
                    console.log('s',vars,'e')
                }
                sendData1(vars)
                interaction.channel.messages.fetch({ limit: 1 }).then(messages => {
                    let lastMessage = messages.first();
                    lastMessage.edit({content: 'The server is ready to join.\nPlayers: '+addqueue+' \n map: '+textmap+' \nIP: ```'+vars[0]+'```', components: [games] })
                })


        }
        if (interaction.customId === 'finished') {
            vals.length = 0
            setter = 'null'
            inqueue = inqueue1.slice()
            idqueue = iddqueue1.slice()
            console.log(iddqueue1,idqueue)
            addqueue = idqueue.map(name => `<@${name}>`)
            addqueue2.length = 0
            mapvoters.length = 0
            sirenvoters.length = 0
            reefvoters.length = 0
            sanctumvoters.length = 0
            embervoters.length = 0
            mapvoters.length = 0
            vals.length = 0
            vars.length = 0
            sivote = 0
            revote = 0
            savote = 0
            emvote = 0
            iddqueue1.length=0
            inqueue1.length = 0
            console.log(iddqueue1,'end')
            if (idqueue.length == maxqueue){
                inqueue1.length = 0
                iddqueue1.length = 0
                console.log('full queue')
                console.log('must be in this',idqueue)
                addqueue1 = idqueue.map(name => `<@${name}>`)
                console.log(addqueue1, addqueue2)
                await interaction.update({content: ` Queue is full, ready up.\nreadied: \n ${addqueue2} \nnot readied:\n${addqueue1}`, components: [readied] });
                allready = setTimeout(async () => {
                    vals.length = 0
                    setter = null
                    idqueue = iddqueue1.slice()
                    addqueue = idqueue.map(name => `<@${name}>`)
                    addqueue2.length = 0
                    mapvoters.length = 0
                    iddqueue1.length = 0
                    await interaction.editReply({
                        content: `${idqueue.length}/10 people in queue: ${addqueue}`,
                        components: [row] // Optionally remove components
                    });
                }, 60000); // 10000 ms = 10 seconds;
            } else {
                addqueue1 = idqueue.map(name => `<@${name}>`)
            await interaction.update({
                content: `players in queue ${idqueue.length}/10: ${addqueue1}`,
                components: [row] // Optionally remove components
            
            });}

        }
        if (interaction.customId === 'drop') {
            console.log('premove',iddqueue1)
            const index = iddqueue1.indexOf(interaction.user.id);
            if (index > -1) { 
                iddqueue1.splice(index, 1); 
            }
            console.log('removed',iddqueue1)
            const inndex = inqueue1.indexOf(interaction.user.username);
            if (inndex > -1) { 
                inqueue1.splice(index, 1); 
            }
            interaction.deferUpdate()
        }
        if (interaction.customId === 'siren') {
            if (sirenvoters.includes(interaction.user.id)==false){
            const rindex = reefvoters.indexOf(interaction.user.id);
            if (rindex > -1) { 
                reefvoters.splice(rindex, 1); 
            }
            const sindex = sanctumvoters.indexOf(interaction.user.id);
            if (sindex > -1) { 
                sanctumvoters.splice(sindex, 1); 
            }
            const eindex = embervoters.indexOf(interaction.user.id);
            if (eindex > -1) { 
                embervoters.splice(eindex, 1); 
            }
            console.log('voters',mapvoters)
            const index = mapvoters.indexOf(interaction.user.id);
            if (index > -1) { 
                mapvoters.splice(index, 1); 
            }
            console.log('voted',mapvoters)
            
            sirenvoters.push(interaction.user.id)
            sivote = sirenvoters.length
            revote = reefvoters.length
            savote = sanctumvoters.length
            emvote = embervoters.length
            mavote = mapvoters.length
            if (mapvoters.length == 0){
                if (sivote >= revote && sivote >= savote && sivote >= emvote) {
                    await interaction.update({
                    content: `playing sirensstrand`,
                    components: [setted]
                });
                actmap = 'LV_valley'
                textmap = 'Sirens strand'
            }
                    if (revote > sivote && revote >= savote && revote >= emvote) {
                        await interaction.update({
                        content: `playing ghostreef`,
                        components: [setted]
                    });
                    actmap = 'LV_canyon'
                    textmap = 'Ghost reef'
                }
                    if (savote > revote && savote > sivote && savote > emvote) {
                        await interaction.update({
                        content: `playing sanctum falls`,
                        components: [setted]
                    });
                    actmap = 'LV_mistforge'
                    textmap = 'Sanctum falls'
                }
                    if (emvote > revote && emvote >= savote && emvote > sivote) {
                        await interaction.update({
                        content: `playing ember grove`,
                        components: [setted]
                    });
                    actmap = 'LV_wizardwoods'
                    textmap = 'Ember grove'
                }
                clearTimeout(mapwait)
                console.log(textmap)
            }
            else {
                await interaction.update({content: `Everyone ready, vote for a map\nsirens strand: ${sivote}\nGhost reef: ${revote}\nSanctum falls: ${savote}\nEmber grove: ${emvote}`, components: [mapvote] }); 
            }

        }}
         if (interaction.customId === 'reef') {
            if (reefvoters.includes(interaction.user.id)==false){
            const siindex = sirenvoters.indexOf(interaction.user.id);
            if (siindex > -1) { 
                sirenvoters.splice(siindex, 1); 
            }
            const sindex = sanctumvoters.indexOf(interaction.user.id);
            if (sindex > -1) { 
                sanctumvoters.splice(sindex, 1); 
            }
            const eindex = embervoters.indexOf(interaction.user.id);
            if (eindex > -1) { 
                embervoters.splice(eindex, 1); 
            }
            const index = mapvoters.indexOf(interaction.user.id);
            if (index > -1) { 
                mapvoters.splice(index, 1); 
            }
            
            reefvoters.push(interaction.user.id)
            sivote = sirenvoters.length
            revote = reefvoters.length
            savote = sanctumvoters.length
            emvote = embervoters.length
            mavote = mapvoters.length
            if (mapvoters.length == 0){
                if (sivote >= revote && sivote >= savote && sivote >= emvote) {
                    await interaction.update({
                    content: `playing sirens strand`,
                    components: [setted]
                });
                actmap = 'LV_valley'
                textmap = 'Sirens strand'
            }
                    if (revote > sivote && revote >= savote && revote >= emvote) {
                        await interaction.update({
                        content: `playing ghostreef`,
                        components: [setted]
                    });
                    actmap = 'LV_canyon'
                    textmap = 'Ghost reef'
                }
                    if (savote > revote && savote > sivote && savote > emvote) {
                        await interaction.update({
                        content: `playing sanctum falls`,
                        components: [setted]
                    });
                    actmap = 'LV_mistforge'
                    textmap = 'Sanctum falls'
                }
                    if (emvote > revote && emvote >= savote && emvote > sivote) {
                        await interaction.update({
                        content: `playing ember grove`,
                        components: [setted]
                    });
                    actmap = 'LV_wizardwoods'
                    textmap = 'Ember grove'
                }
                clearTimeout(mapwait)
                console.log(textmap)
            }
            else {
                await interaction.update({content: `Everyone ready, vote for a map\nsirens strand: ${sivote}\nGhost reef: ${revote}\nSanctum falls: ${savote}\nEmber grove: ${emvote}`, components: [mapvote] }); 
            }

         }}
        if (interaction.customId === 'sanctum') {
            if (sanctumvoters.includes(interaction.user.id)==false){
                const siindex = sirenvoters.indexOf(interaction.user.id);
                if (siindex > -1) { // only splice array when item is found
                    sirenvoters.splice(siindex, 1); // 2nd parameter means remove one item only
                }
                const rindex = reefvoters.indexOf(interaction.user.id);
                if (rindex > -1) { // only splice array when item is found
                    reefvoters.splice(rindex, 1); // 2nd parameter means remove one item only
                }
                const eindex = embervoters.indexOf(interaction.user.id);
                if (eindex > -1) { // only splice array when item is found
                    embervoters.splice(eindex, 1); // 2nd parameter means remove one item only
                }
                const index = mapvoters.indexOf(interaction.user.id);
                if (index > -1) { // only splice array when item is found
                    mapvoters.splice(index, 1); // 2nd parameter means remove one item only
                }

                sanctumvoters.push(interaction.user.id)
                sivote = sirenvoters.length
                revote = reefvoters.length
                savote = sanctumvoters.length
                emvote = embervoters.length
                mavote = mapvoters.length
                if (mapvoters.length == 0){
                    if (sivote >= revote && sivote >= savote && sivote >= emvote) {
                        await interaction.update({
                        content: `playing sirensstrand`,
                        components: [setted]
                    });
                    actmap = 'LV_valley'
                    textmap = 'Sirens strand'
                }
                        if (revote > sivote && revote >= savote && revote >= emvote) {
                            await interaction.update({
                            content: `playing ghost reef`,
                            components: [setted]
                        });
                        actmap = 'LV_canyon'
                        textmap = 'Ghost reef'
                    }
                        if (savote > revote && savote > sivote && savote > emvote) {
                            await interaction.update({
                            content: `playing sanctum falls`,
                            components: [setted]
                        });
                        actmap = 'LV_mistforge'
                        textmap = 'Sanctum falls'
                    }
                        if (emvote > revote && emvote >= savote && emvote > sivote) {
                            await interaction.update({
                            content: `playing ember grove`,
                            components: [setted]
                        });
                        actmap = 'LV_wizardwoods'
                        textmap = 'Ember grove'
                    }
                    clearTimeout(mapwait)
                }
                else {
                    await interaction.update({content: `Everyone ready, vote for a map\nsirens strand: ${sivote}\nGhost reef: ${revote}\nSanctum falls: ${savote}\nEmber grove: ${emvote}`, components: [mapvote] }); 
                }
        }}
        if (interaction.customId === 'ember') {
            if (embervoters.includes(interaction.user.id)==false){
                const siindex = sirenvoters.indexOf(interaction.user.id);
                if (siindex > -1) { // only splice array when item is found
                    sirenvoters.splice(siindex, 1); // 2nd parameter means remove one item only
                }
                const rindex = reefvoters.indexOf(interaction.user.id);
                if (rindex > -1) { // only splice array when item is found
                    reefvoters.splice(rindex, 1); // 2nd parameter means remove one item only
                }
                const sindex = sanctumvoters.indexOf(interaction.user.id);
                if (sindex > -1) { // only splice array when item is found
                    sanctumvoters.splice(sindex, 1); // 2nd parameter means remove one item only
                }
                const index = mapvoters.indexOf(interaction.user.id);
                if (index > -1) { // only splice array when item is found
                    mapvoters.splice(index, 1); // 2nd parameter means remove one item only
                }

                embervoters.push(interaction.user.id)
                sivote = sirenvoters.length
                revote = reefvoters.length
                savote = sanctumvoters.length
                emvote = embervoters.length
                mavote = mapvoters.length
                if (mapvoters.length == 0){
                    if (sivote >= revote && sivote >= savote && sivote >= emvote) {
                        await interaction.update({
                        content: `playing sirens strand`,
                        components: [setted]
                    });
                    actmap = 'LV_valley'
                    textmap = 'Sirens strand'
                }
                        if (revote > sivote && revote >= savote && revote >= emvote) {
                            await interaction.update({
                            content: `playing ghost reef`,
                            components: [setted]
                        });
                        actmap = 'LV_canyon'
                        textmap = 'Ghost reef'
                    }
                        if (savote > revote && savote > sivote && savote > emvote) {
                            await interaction.update({
                            content: `playing sanctum falls`,
                            components: [setted]
                        });
                        actmap = 'LV_mistforge'
                        textmap = 'Sanctum falls'
                    }
                        if (emvote > revote && emvote >= savote && emvote > sivote) {
                            await interaction.update({
                            content: `playing ember grove`,
                            components: [setted]
                        });
                        actmap = 'LV_wizardwoods'
                        textmap = 'Ember grove'
                    }
                    clearTimeout(mapwait)
                } else {
                    await interaction.update({content: `Everyone ready, vote for a map\nsirens strand: ${sivote}\nGhost reef: ${revote}\nSanctum falls: ${savote}\nEmber grove: ${emvote}`, components: [mapvote] }); 
                }
            }
        }
    }
}
