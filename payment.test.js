describe("payment func test", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = "200";
    tipAmtInput.value = "40";
  });
  it("should add new payment to allPayments obj on submitPaymentInfo func", function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("200");
    expect(allPayments["payment1"].tipAmt).toEqual("40");
    expect(allPayments["payment1"].tipPercent).toEqual(20);
  });
});
