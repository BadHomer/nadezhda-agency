<script>
    import Button from "../../ui/Button.svelte";
</script>

<footer>
    <div class="footer-list">
        <div class="footer-logo">
            <a href="#">
                <img src="/static/footer-logo.svg">
                <span></span>
                <p></p>
            </a>
        </div>
        <div class="footer-order-call">
            <p>Покупка, продажа, аренда недвижимости Работа с жилищными сертификатами Работа с новстройками. Оформление заявки на ипотеку у нас в офисе</p>
            <Button />
        </div>

        <div class="work-schedule">
            <h3 class="work-schedule__title"></h3>
            <p class="work-schedule__info"><p/>
            <p class="work-schedule__address"></p>
        </div>
        <div class="contacts">
            <div class="socials-list">
                <a href="vk"><img src="/static/vk-logo.svg"> </a>
                <a href="telegram"><img src="/static/telegram-logo.svg"></a>
            </div>
            <a  href="" class="contact-phone">+7 950 458 2339</a>
            <a href="" class="contact-email">lenarealestate@outlook.com</a>
        </div>
    </div>

</footer>