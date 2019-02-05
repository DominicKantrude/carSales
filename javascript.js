
salesByWeek.forEach(sale => {
    console.log(sale.sales_agent.first_name + " " + sale.sales_agent.last_name)

    for (const entry of Object.entries(sale.vehicle)) {
        console.log(entry[0] + ": " + entry[1])
    }
    console.log("gross profit: " + sale.gross_profit)
    console.log("-----------------------------------------------------------------")
});