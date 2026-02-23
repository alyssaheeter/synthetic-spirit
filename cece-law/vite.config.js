import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                criminalDefense: './criminal-defense.html',
                duiDefense: './dui-defense.html',
                felonyDefense: './felony-defense.html',
                federalDefense: './federal-criminal-defense.html',
                contact: './contact.html',
                theArena: './the-arena.html',
                domesticBattery: './domestic-battery.html',
                drugCharges: './drug-charges.html',
                gunCharges: './gun-charges.html',
                whiteCollar: './white-collar.html',
                expungement: './expungement.html'
            },
        },
    },
});
