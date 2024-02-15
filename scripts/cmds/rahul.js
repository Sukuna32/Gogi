module.exports = {
  config: {
    name: "rahul raj",
    version: "1.0",
    author: "Jaychris Garcia",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function () {},
  onChat: async function ({ event, message, getLang }) {
    const text = event.body.toLowerCase();
    if (text.includes("@rahul raj󱢏")) {
      return message.reply({
        body: "𝐈'𝐯𝐞 𝐆𝐫𝐨𝐰𝐧 𝐅𝐫𝐨𝐦 𝐌𝐚𝐧 𝐓𝐨 𝐀 𝐆𝐨𝐝",
        attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?export=download&id=12hGWa3SmlH9E9PGqPB5HKPFGAS97kP5P")
      });
    }
  }
};