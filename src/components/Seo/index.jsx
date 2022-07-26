import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = () => {
  return (
    <Helmet
      htmlAttributes={{ lang: 'ru' }}
      title="Центр развития охраны труда"
      meta={[
        {
          name: 'description',
          content:
            'Решаем нестандартные вопросы по охране труда. Участвуем в проверках, расследуем НС. Помогаем компаниям создавать эффективные системы безопасности производства',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
      ]}
    ></Helmet>
  );
};

export default Seo;
