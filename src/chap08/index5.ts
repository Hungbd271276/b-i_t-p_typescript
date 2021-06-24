class baiso5 {
    bai5() {
     const inputs =  document.querySelector("#login");
       const input2 = document.createElement('div');
       input2.classList.add('login');
       input2.innerHTML = `
           <h2>Username</h2>
           <input type="text" class = "put">
           <button type = "submit" class = "btn btn-primary">Start</button>
       `
        inputs.appendChild(input2);
    }
}
export default baiso5;