function copyEmail() {
            navigator.clipboard.writeText('jose.maurel@epitech.eu').then(function() {
                alert('Email copied to clipboard!');
            });
        }

        // Simple typing animation
        const dynamicText = document.querySelector('.dynamic-text');
        const roles = ['Computer Science Student', 'Software Developer', ' Devops Enthusiast', 'Network Enthusiast'];
        let roleIndex = 0;
        
        setInterval(() => {
            dynamicText.textContent = roles[roleIndex];
            roleIndex = (roleIndex + 1) % roles.length;
        }, 3000);