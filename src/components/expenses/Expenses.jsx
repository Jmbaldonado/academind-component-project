import React, { useState } from "react";
import "./Expenses.css";
import Card from "@/components/ui/Card.jsx";
import ExpenseFilter from "@/components/expenses/ExpenseFilter.jsx";
import ExpensesList from "@/components/expenses/ExpensesList.jsx";
import ExpensesChart from "@/components/expenses/ExpensesChart.jsx";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className={"expenses"}>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
