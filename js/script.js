const student = Number(prompt("To'plagan balingizni kiriting"));

if (!isNaN(student)) {
  const noBal = 0,
    minBal = 80,
    medBal = 100,
    medBal2 = 150,
    maxBal = 180;

  if (student >= noBal && student < minBal) {
    alert(`Siz o'qishga kira olmadingiz.O'tish bali ${minBal} bal`);
  } else if (student >= minBal && student < medBal) {
    alert(`Siz super kontrakt asosida o'qishga tavsiya etildingiz`);
    const superContract = 3000;
    const contract = Number(
      prompt(
        `Kontrakt miqdori yiliga ${superContract}$.To'lovni amalga oshirish uchun pulingizni kiriting`
      )
    );
    const resultContract = superContract - contract;
    if (contract < superContract) {
      alert(
        `Kiritilgan mablag' yetarli emas.To'lov uchun ${resultContract}$ yetmadi`
      );
    }
    const money = contract - superContract;
    if (contract > superContract) {
      alert(
        `To'lov muvoffaqyatli amalga oshirildi.Siz super kontrakt asosida o'qishga qabul qilindingiz va sizda ${money}$ ortib qoldi`
      );
    }
    if (contract == superContract) {
      alert(
        `To'lov muvoffaqyatli amalga oshirildi.Siz super kontrakt asosida o'qishga qabul qilindindingiz`
      );
    }
  } else if (student >= medBal && student < medBal2) {
    alert(`Siz kontrakt asosida o'qishga qabul qilindingiz`);
    const contractSimple = 2000;
    const studentMoney = Number(
      prompt(
        `Kontrakt miqdori yiliga ${contractSimple}$. Tolovni amalga oshirish uchun pulingizni kiriting`
      )
    );
    const lowContract = contractSimple - studentMoney;
    if (studentMoney < contractSimple) {
      alert(
        `Kiritilgan mablag' yetarli emas. To'lovni amalga oshirish uchun sizda ${lowContract}$ yetmadi`
      );
    }
    const highContract = studentMoney - contractSimple;
    if (studentMoney > contractSimple) {
      alert(
        `To'lov muvoffaqyatli amalga oshirildi.Siz super kontrakt asosida o'qishga qabul qilindingiz va sizda ${highContract}$ ortib qoldi`
      );
    }
    if (studentMoney == contractSimple) {
      alert(
        `To'lov muvoffaqyatli amalga oshirildi.Siz kontrakt asosida o'qishga qabul qilindingiz`
      );
    }
  } else if (student >= medBal2 && student <= maxBal) {
    alert(`Siz o'qishga GRANT asosida qabul qilindingiz`);
  }
} else {
  alert("Noto'g'ri qiymat kiritildi");
}
