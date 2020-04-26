import Lot from "./model";

export default {
    async run(req, res) {
        try {
            await Lot.deleteMany({});
            const lots = [
                {
                    title: "lot1",
                    startPrice: 110,
                    endPrice:140,
                    startData:12.02,
                    endData:14.02
                },
                {
                    title: "lot2",
                    startPrice: 315,
                    endPrice:746,
                    startData:13.05,
                    endData:16.06
                },
                {
                    title: "lot3",
                    startPrice: 1220,
                    endPrice:1400,
                    startData:13.02,
                    endData:14.09
                },
                {
                    title: "lot4",
                    startPrice: 340,
                    endPrice:540,
                    startData:13.02,
                    endData:18.02
                },
                {
                    title: "lot5",
                    startPrice: 1010,
                    endPrice:1020,
                    startData:19.02,
                    endData:24.02
                }
            ];

            lots.forEach(async lot => await new Lot(lot).save());
        } catch (error) {
            console.log(error)
        }
    }
}