const keywordTags = [
  'Ramenbet',
  'раменбет',
  'Ramenbet зеркало',
  'рамен бет',
  'ramen bet',
  'раменбет зеркало',
  'Ramenbet официальный сайт',
  'раменбет официальный сайт',
  'раменбет рабочее зеркало',
  'Ramenbet казино',
  'раменбет казино',
]

export default function Page() {
  return (
    <main className="rb-page">
      <header className="rb-header">
        <a className="rb-brand" href="#top" aria-label="Ramenbet — на главную">
          <span className="rb-brand-mark" aria-hidden="true">R</span>
          <span>Ramenbet</span>
        </a>
        <nav className="rb-nav" aria-label="Основная навигация">
          <a href="#guide">Как начать</a>
          <a href="#games">Игры</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="rb-header-link" href="#guide">Открыть сайт <span aria-hidden="true">↗</span></a>
      </header>

      <section className="rb-hero" id="top" aria-labelledby="hero-title">
        <div className="rb-hero-copy">
          <p className="rb-eyebrow"><span className="rb-status-dot" aria-hidden="true" /> Онлайн-казино без лишнего шума</p>
          <h1 id="hero-title">Ramenbet — понятный вход в мир онлайн-игр</h1>
          <p className="rb-lead">Быстрый путь на Ramenbet, актуальные способы входа и короткая инструкция для игрока. Сохраняйте страницу, если официальный сайт временно не открывается.</p>
          <div className="rb-actions">
            <a className="rb-primary-action" href="#guide">Перейти к инструкции <span aria-hidden="true">→</span></a>
            <a className="rb-text-action" href="#games">Посмотреть игры</a>
          </div>
          <div className="rb-hero-note"><span aria-hidden="true">18+</span> Играйте ответственно и только на сумму, которую готовы потратить.</div>
        </div>
        <figure className="rb-hero-art">
          <img src="/ramenbet-table.png" alt="Игровой стол с фишками в тёплом свете" />
          <figcaption><span>01</span> Игровая атмосфера Ramenbet</figcaption>
        </figure>
      </section>

      <section className="rb-proof-row" aria-label="Преимущества">
        <div><strong>01</strong><span>Простой вход</span><small>Без лишних шагов</small></div>
        <div><strong>02</strong><span>Мобильный формат</span><small>Удобно с телефона</small></div>
        <div><strong>03</strong><span>Поддержка 24/7</span><small>Ответы для игроков</small></div>
      </section>

      <section className="rb-content-grid" id="guide">
        <article className="rb-article">
          <p className="rb-kicker">Навигация для игрока</p>
          <h2>Ramenbet зеркало и официальный сайт: как войти быстро</h2>
          <p>Если основной адрес не загружается, используйте проверенное Ramenbet зеркало. Рабочее зеркало раменбет повторяет привычную структуру сайта: профиль, игры, бонусы и раздел помощи остаются на своих местах. Перед входом проверьте адресную строку и убедитесь, что соединение защищено.</p>
          <p>Запрос <strong>Ramenbet официальный сайт</strong> часто используют игроки, которые хотят найти актуальную ссылку без случайных копий. Введите адрес вручную или сохраните эту страницу в закладках. Так вы быстрее попадёте на раменбет зеркало и не потратите время на неработающие страницы.</p>

          <h2>Ramenbet казино для телефона и компьютера</h2>
          <p>Ramenbet казино одинаково удобно открывается в мобильном браузере и на большом экране. Адаптивная версия не требует установки отдельного приложения: достаточно стабильного интернета и современного браузера. В каталоге легко выбрать слот, live-игру или другой формат по знакомым категориям.</p>
          <p>Тем, кто ищет <strong>раменбет казино</strong> или <strong>ramen bet</strong>, стоит начать с демо-режима, если он доступен. Это помогает понять механику игры и не принимать решения поспешно. Рамен бет — это развлечение, а не способ гарантированного заработка.</p>
        </article>

        <aside className="rb-aside" id="games">
          <div className="rb-aside-label">Короткий маршрут</div>
          <ol className="rb-route">
            <li><span>1</span><div><strong>Найдите адрес</strong><p>Проверьте Ramenbet зеркало или официальный сайт.</p></div></li>
            <li><span>2</span><div><strong>Откройте каталог</strong><p>Выберите знакомую игру и изучите правила.</p></div></li>
            <li><span>3</span><div><strong>Задайте лимит</strong><p>Остановитесь, когда лимит времени или бюджета достигнут.</p></div></li>
          </ol>
          <div className="rb-aside-image"><img src="/ramenbet-table.png" loading="lazy" alt="Деталь игрового стола Ramenbet" /></div>
        </aside>
      </section>

      <section className="rb-faq" id="faq" aria-labelledby="faq-title">
        <div><p className="rb-kicker">Ответы без сложных слов</p><h2 id="faq-title">Что важно знать про раменбет</h2></div>
        <div className="rb-faq-list">
          <details open><summary>Где найти раменбет официальный сайт?</summary><p>Переходите по сохранённой проверенной ссылке и внимательно сверяйте домен. Если адрес временно недоступен, используйте актуальное рабочее зеркало раменбет.</p></details>
          <details><summary>Подходит ли Ramenbet для телефона?</summary><p>Да, мобильная версия Ramenbet казино рассчитана на небольшие экраны и не требует отдельной загрузки.</p></details>
          <details><summary>Можно ли играть без контроля?</summary><p>Нет. Заранее определите бюджет и время, не пытайтесь отыграться и делайте паузу при первых признаках дискомфорта.</p></details>
        </div>
      </section>

      <footer className="rb-footer">
        <div className="rb-footer-top"><a className="rb-brand" href="#top"><span className="rb-brand-mark" aria-hidden="true">R</span><span>Ramenbet</span></a><p>Информационная страница для игроков. 18+</p></div>
        <div className="rb-tags" aria-label="Ключевые фразы"><span>Ключевые фразы</span>{keywordTags.map((tag) => <a href="#top" key={tag}>#{tag.replaceAll(' ', '')}</a>)}</div>
        <div className="rb-footer-bottom"><span>© 2026 Ramenbet guide</span><span>Играйте ответственно</span></div>
      </footer>
    </main>
  )
}

export const dynamic = 'force-static'
