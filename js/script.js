
const { createApp } = Vue;

const image = "https://media.tenor.com/lyntKWxVW6EAAAAM/so_witty.gif"
createApp({
    data() {
        return {
            // tutti i nostri dati


            message: "now life is good with Vue!",
            image: image,

        }
    }
}).mount("#app");
