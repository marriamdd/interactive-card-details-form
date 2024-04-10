import styled from "styled-components";
export default function FormContent() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="UserName">Cardholder Name</label>
          <input id="userName" type="text" placeholder="e.g. Jane Appleseed" />
        </div>
        <div>
          <label htmlFor="CardNumber">Card Number</label>
          <input
            id="CardNumber"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div>
          <label htmlFor="date">Exp. Date (MM/YY)</label>
          <input id="date" type="text" placeholder="MM" />

          <input type="text" placeholder="YY" />
          <label htmlFor="cvc"></label>
          <input id="cvc" type="text" placeholder="e.g. 123" />
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
