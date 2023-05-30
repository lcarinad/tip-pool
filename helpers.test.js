describe("utilities test", function () {
  beforeEach(function () {
    billAmtInput.value = "200";
    tipAmtInput.value = "40";
    submitPaymentInfo();
  });
  it("should sum tip amt of all payments on sumPaymentTotal func", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(40);
    billAmtInput.value = 300;
    tipAmtInput.value = 60;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(100);
  });
  it("should sum bill amt of all payments on sumPaymentTotal func", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(200);
    billAmtInput.value = 300;
    tipAmtInput.value = 60;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(500);
  });
  it("should sum tip percent of all payments on sumPaymentTotal func", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(20);
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });
  it("should sum tip percent of a single tip on calculateTipPercent()", function () {
    expect(calculateTipPercent(100, 23)).toEqual(23);
    expect(calculateTipPercent(111, 11)).toEqual(10);
  });

  it("should generate new td from value and append to tr on appendTd(tr, value)", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "test");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("test");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
