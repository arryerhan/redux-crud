/*
 ! reducer
 * state'in nasıl değişceğeğine karar veren fonksiyon

 * bu fonksiyon 2 parametre alır
 * >> state : reducer'da tuutlan verinin son durumu
 * >> action : verilerin nasıl değişceğini ifade eden nesne
  
 * reducer fonksiyonunda reducer edilen değer state'in son değeri olur
 * state'in ilk değerini parametre bölümünde ifade ederiz 
*/

// tutulacak state'in projenin ilk yüklendiği andaki değerleri
const initialState = {
    user: null,
    token: "",
    role: "user",
};

const userReducer = (state = initialState, action) => {
    // reducer'a gelen aksiyonun tipine göre return'e karar ver
    switch (action.type) {
        case "LOGIN":
            return state;

        case "SIGNUP":
            return state;

        case "LOGOUT":
            return state;

        // gelen aksiyon yukarıdakilerden biri değilse state'i olduğu gibi koru
        default:
            return state;
    }
};

export default userReducer;