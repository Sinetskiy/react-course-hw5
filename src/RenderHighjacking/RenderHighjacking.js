import React from 'react';

/*
  Это задание со звёздочкой, его можно не выполнять.

  Это необычный вид хока, который называется **inheritance inversion HOC**.

  В отличие от обычного, в нём мы используем не композицию,
  а наследование от обёрнутого компонента.

  ВНИМАНИЕ! Настоятельно не рекомендую использовать этот вид HOC
  на практике. Паттерн даётся ТОЛЬКО для ознакомления.

  В этом задании нужно перехватить рендеринг
  и, если самый внешний элемент кнопка - назначить ей
  стиль 'background: red'
*/

export const withRedBackground = WrappedComponent => {
    return class extends WrappedComponent {
        render() {
            const hocRender = super.render();
            if (hocRender.type === 'button') {
                // hocRender.style = {background: "red"};
                // !!! не знаю как переопределить стиль непосредсвенно в обьекте
                return <button style={{background: 'red'}} >With red background</button>;
            }
            return hocRender;
        }
    }
};
