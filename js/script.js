//DTM-Test
var bal = Number(prompt("To'plagan balingizni kiriting"));
if (bal != "") {
  if (bal > 0 && bal != String) {
    var noBal = 0,
      minBal = 80,
      medBal = 100,
      medBal2 = 150,
      maxBal = 180;
    //0--80 bal
    if (bal < noBal || bal < minBal) {
      alert(`Siz o'qishga tavsiya etilmadingiz.O'tish bali ${minBal} bal`);
    }
    //80--100 bal
    else if (bal <= minBal || bal < medBal) {
      alert(`Siz o'qishga super kontrakt asosida tavsiya etildingiz`);
      var superContractMoney = 3000;
      var superContract = Number(
        prompt(
          `Kontrakt miqdori yiliga ${superContractMoney}$. To'lovni amalga oshirish uchun pulingizni kiriting`
        )
      );
      if (superContract < superContractMoney) {
        alert(`Sizning hisobingizda mablag' yetarli emas`);
      } else {
        if (superContract >= superContractMoney) {
          alert(
            `To'lov muvoffaqyatli amalga oshirildi,Tabriklaymiz siz super kontrakt asosida o'qishga qabul qilindingiz`
          );
        }
      }
    }
    //100--150 bal
    else if (bal < medBal || bal < medBal2) {
      alert(`Siz o'qishga kontrakt asosida qabul qilindingiz`);
      var contractMoney = 2000;
      var contract = Number(
        prompt(
          `Kontrakt miqdori yiliga ${contractMoney}$. To'lovni amalga oshirish uchun pulingizni kiriting`
        )
      );
      if (contract < contractMoney) {
        alert("Sizning hisobingizda mablag' yetarli emas");
      } else {
        if (contract >= contractMoney) {
          alert(
            `To'lov muvoffaqyatli amalga oshirildi,Tabriklaymiz siz kontrakt asosida o'qishga qabul qilindingiz`
          );
        }
      }
    }
    //150--180 bal
    else if (bal <= medBal2 || bal <= maxBal) {
      alert("Tabriklaymiz siz GRANT asosida o'qishga qabul qilindingiz");
    }
  } else {
    alert("Noto'g'ri qiymat kiritildi");
  }
} else {
  alert("Qiymat kiritilmadi");
}
