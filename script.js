
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

document.addEventListener("DOMContentLoaded", function() {
            showPartner(0); // Show the first partner by default (index 0)
        });


        // Contact tabs
        const contentTabs = document.querySelectorAll('.contentTab');
        const contentTabContent = document.querySelectorAll('.contentTabClass');
        
        contentTabs.forEach(contentTab => {
            contentTab.addEventListener('click', () => {
                // Remove active class from all tabs
                contentTabs.forEach(tab => tab.classList.remove('active'));
        
                // Add active class to clicked tab
                contentTab.classList.add('active');
                
                // Hide all tab contents
                contentTabContent.forEach(content => content.classList.remove('active'));
        
                // Add active class to clicked tab
                contentTab.classList.add('active');
        
                // Show corresponding tab content
                const activeTab = contentTab.getAttribute('data-tab');
                document.getElementById(activeTab).classList.add('active');
            });
        });
        
