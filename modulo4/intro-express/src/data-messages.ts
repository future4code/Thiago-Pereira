export type Messages = {
    userId: number,
    messageId: number,
    title: string,
    body: string
}

export const messages: Messages[] = [
    {
        userId: 9,
        messageId: 1,
        title: "AIA - Alerta, Alerta",
        body: "Foi detectado uma falha no casto na ala G, evacuar imediatamente."
    },
    {
        userId: 1,
        messageId: 2,
        title: "Registro - Falha reparada",
        body: "Falha no casto da ala G foi consertada, porém tal imprevisto nos causou instabilidades."
    },
    {
        userId: 9,
        messageId: 3,
        title: "AIA - Calculos de danos",
        body: "Biodomo, Sala do Motor leste, Energia instável, Cabines #2 e #5, 3 tripulantes feridos."
    },
    {
        userId: 4,
        messageId: 4,
        title: "Registro - Tripulantes feridos localizados",
        body: "Phelipe, Aristhra e Jax levados para a area médica tendo seus socorros ja efetivados."
    },
    {
        userId: 7,
        messageId: 5,
        title: "Registro - Motor leste infuncional",
        body: "Os danos no morto de propulsão leste parece terem sido significativos, sem previsão de conserto."
    },
    {
        userId: 2,
        messageId: 6,
        title: "Registro - Biodomo estabilizado",
        body: "Plantas e hidroponicas do biodomo foram reinstabelecidas, aparentemente nem tudo se perdeu devido a perda de pressão do vácuo."
    },
    {
        userId: 6,
        messageId: 7,
        title: "Registro - Campo de asteróides",
        body: "Possível campo de asteroides se aproximando, precisamos do morto de propulsão leste funcional o mais rápido possível."
    },
]