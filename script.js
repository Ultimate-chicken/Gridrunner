
//product tabs
const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });

        //partners tabs
        function showPartner(index) {
            // Hide all partner cards
            let partnerCards = document.querySelectorAll('.partner-card');
            partnerCards.forEach(card => card.classList.remove('active'));

            // Show the selected partner card
            document.getElementById('partner-' + index).classList.add('active');

            // Update button styles to indicate active selection
            let buttons = document.querySelectorAll('.company-button');
            buttons.forEach((button, i) => {
                button.classList.remove('red');
                button.classList.add(i === index ? 'red' : 'white');
            });
        }

        // Default to showing the first partner
        showPartner(0);

        // Contact tabs
        const contactTabs = document.querySelectorAll('.tab');
        const contactTabContent = document.querySelectorAll('.tab-content');

        contactTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                contactTabs.forEach(tab => tab.classList.remove('active'));

                // Hide all tab contents
                contactTabContent.forEach(content => content.classList.remove('active'));

                // Add active class to clicked tab
                tab.classList.add('active');

                // Show corresponding tab content
                const activeTab = tab.getAttribute('data-tab');
                document.getElementById(activeTab).classList.add('active');
            });
        });
