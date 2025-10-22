document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("renkler");
    const button = document.getElementById("gonder");
    const body = document.body;
    const togglePasswordBtn = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    // --------------------------------
    // Select focus glow (geçici inline stil yerine class kullanabiliriz)
    // --------------------------------
    select.addEventListener("focus", () => {
        select.style.border = `2px solid var(--accent)`;
        select.style.boxShadow = `0 0 15px var(--accent), 0 0 25px var(--accent2)`;
        select.style.backgroundColor = `rgba(0,0,0,0.18)`;
        select.style.color = `var(--accent)`;
    });

    select.addEventListener("blur", () => {
        select.style.border = `2px solid rgba(255,255,255,0.06)`;
        select.style.boxShadow = `none`;
        select.style.backgroundColor = ``;
        select.style.color = ``;
    });

    // --------------------------------
    // Tema uygulama (gönder butonuna tıklandığında)
    // --------------------------------
    button.addEventListener("click", () => {
        const secilenTema = select.value; // örn: 'kirmizi-mavi'
        // Temizle: önceden eklenmiş olabilecek tema sınıflarını temizle
        body.classList.remove("kirmizi-mavi", "su-yesili-su-mavisi", "sari-kirmizi", "mavi-pembe", "pembe-mor");
        // Ekle: seçileni ekle
        body.classList.add(secilenTema);

        // Görsel bir geri bildirim: butonu kısa bir süreliğine titreştir
        button.style.transform = "translateY(-3px)";
        setTimeout(() => button.style.transform = "", 180);
    });

    // --------------------------------
    // Şifre göster/gizle toggle
    // --------------------------------
    togglePasswordBtn.addEventListener("click", () => {
        const isHidden = passwordInput.type === "password";
        if (isHidden) {
            passwordInput.type = "text";
            // ikon değişimi: eyeOpen gizle, eyeClosed göster
            document.getElementById("eyeOpen").style.display = "none";
            document.getElementById("eyeClosed").style.display = "block";
        } else {
            passwordInput.type = "password";
            document.getElementById("eyeOpen").style.display = "block";
            document.getElementById("eyeClosed").style.display = "none";
        }
        // Erişilebilirlik için aria-label güncelle
        togglePasswordBtn.setAttribute("aria-pressed", String(isHidden));
    });

    // Enter tuşuyla gönderme (opsiyonel — formu submit etmiyoruz, sadece tema uygular)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            // Focus bir inputta ise gönder butonunu tetikle
            const active = document.activeElement;
            if (active && (active.tagName === "INPUT" || active.tagName === "SELECT")) {
                e.preventDefault();
                button.click();
            }
        }
    });
});
