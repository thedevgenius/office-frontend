// document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle for mobile
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });

    // Submenu toggle
    const menuToggles = document.querySelectorAll('.menu-toggle');
    menuToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Menu toggle clicked');
            const targetId = btn.getAttribute('data-target');
            const submenu = document.getElementById(targetId);
            const icon = btn.querySelector('svg');
            submenu.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });

    // Admin dropdown toggle
    const adminToggle = document.querySelector('.admin-toggle');
    const adminDropdown = document.getElementById('adminDropdown');
    const adminIcon = document.getElementById('adminIcon');

    adminToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        adminDropdown.classList.toggle('hidden');
        adminIcon.classList.toggle('rotate-180');
    });

    // Close dropdown if clicking outside
    document.addEventListener('click', (e) => {
        if (!adminDropdown.contains(e.target) && !adminToggle.contains(e.target)) {
            adminDropdown.classList.add('hidden');
            adminIcon.classList.remove('rotate-180');
        }
    });
// });
