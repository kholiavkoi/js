function mostSales(products, amounts, prices) {
    const res = products.map((product, i) => {
        return {
            product,
            revenue: amounts[i] * prices[i]
        }
    })

    return res.sort((a, b) => b.revenue - a.revenue).slice(0, 3).map(item => item.product)
}


console.log(mostSales(['Computer', 'Cell Phones', 'Vacuum Cleaner', 'Microwave'], [3, 24, 8, 4], [199, 299, 399, 269]))