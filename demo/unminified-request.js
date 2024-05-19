const formElement = document.getElementById('password-form');
        const passwordElement = document.getElementById('password');

        formElement.addEventListener('submit', (event) => { 
            event.preventDefault()
            const plainTextPassword = passwordElement.value;
            console.log(plainTextPassword)
            

            fetch(`http://localhost:3000`, 
                {
                    method: 'POST',
                    body: new URLSearchParams(
                        {
                            password: plainTextPassword
                        }
                    )
                }
            )
        }, false)