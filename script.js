function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}
document.getElementById('enquiryForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    let text = `Hello Tenga Mota, my name is ${name}. Phone: ${phone}. I'm interested in: ${service}.`;
    if (message) text += ` Message: ${message}`;
    const url = `https://wa.me/263719139928?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
});
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
    });
});
