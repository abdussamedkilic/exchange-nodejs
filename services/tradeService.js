// services/tradeService.js

const { Transaction, Share, Portfolio } = require('../models');

class TradeService {
    static async buy(data) {
        const { userId, symbol, quantity } = data;
        const portfolio = await Portfolio.findOne({ where: { userId } });
        if (!portfolio) {
            throw new Error('user portfolio not found');
        }

        const share = await Share.findOne({ where: { symbol } });
        if (!share) {
            throw new Error('No stocks found');
        }

        const cost = share.price * quantity;
        if (portfolio.balance < cost) {
            throw new Error('Insufficient balance');
        }

        await portfolio.update({ balance: portfolio.balance - cost });
        const transaction = await Transaction.create({
            type: 'BUY',
            quantity,
            price: share.price,
            portfolioId: portfolio.id,
            shareId: share.id,
        });

        return transaction;
    }

    static async sell(data) {
        const { userId, symbol, quantity } = data;
        const portfolio = await Portfolio.findOne({ where: { userId } });
        if (!portfolio) {
            throw new Error('User portfolio not found');
        }

        const share = await Share.findOne({ where: { symbol } });
        if (!share) {
            throw new Error('No shares found');
        }

        const transactions = await Transaction.findAll({
            where: { portfolioId: portfolio.id, shareId: share.id },
        });

        const totalBought = transactions
            .filter((t) => t.type === 'BUY')
            .reduce((acc, t) => acc + t.quantity, 0);

        const totalSold = transactions
            .filter((t) => t.type === 'SELL')
            .reduce((acc, t) => acc + t.quantity, 0);

        const availableQuantity = totalBought - totalSold;
        console.log(availableQuantity);
        if (availableQuantity < quantity) {
            throw new Error('Insufficient amount of shares');
        }

        const revenue = share.price * quantity;
        await portfolio.update({ balance: portfolio.balance + revenue });

        const transaction = await Transaction.create({
            type: 'SELL',
            quantity,
            price: share.price,
            portfolioId: portfolio.id,
            shareId: share.id,
        });

        return transaction;
    }
}

module.exports = TradeService;
