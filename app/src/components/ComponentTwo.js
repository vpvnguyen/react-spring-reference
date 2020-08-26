import React from "react";
import { useSpring, animated } from "react-spring";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const style = {
  background: "forestgreen",
  color: "white",
  padding: "1.5rem",
};

const ComponentTwo = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div style={style}>
        <animated.div
          class="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        />
        <h1>Component2</h1>
        <p>
          Voluptatum ipsum corrupti corporis quos aliquam quisquam, est ratione
          numquam perferendis maiores necessitatibus! Repellendus magnam modi
          dignissimos natus cum voluptates inventore quam. Magni quidem saepe
          nobis obcaecati delectus dolorum iste velit voluptatem commodi, itaque
          ex perspiciatis laboriosam quo? Laborum voluptatem distinctio nisi
          quod, id obcaecati necessitatibus tempore, officia, quos quis eum
          animi? Rem natus et reiciendis explicabo quasi dignissimos, iusto
          omnis temporibus officiis voluptate ea asperiores, unde tempora fugiat
          deserunt aliquid blanditiis facere sed? Dolores ex architecto corporis
          et delectus, assumenda quisquam. Animi ex distinctio ut soluta
          exercitationem, quibusdam dignissimos, laboriosam maiores dolor quasi
          eaque cumque nam ea similique voluptate aperiam, nobis suscipit totam
          alias aliquam placeat? Sed quisquam numquam consectetur explicabo.
          Doloremque optio dolorum deserunt quasi veritatis facere rerum
          consectetur cumque. Ipsum autem blanditiis praesentium, eveniet fuga,
          nam nostrum rem dolore explicabo accusamus pariatur culpa vero
          nesciunt recusandae repellendus repellat commodi! Recusandae dolore
          enim perferendis velit, impedit tempore perspiciatis tenetur quia quis
          numquam soluta a ipsa consequatur eaque laborum molestiae possimus
          culpa temporibus, blanditiis ducimus cumque placeat aspernatur
          provident atque! Fugiat. Culpa quidem deleniti libero voluptatem
          officia aliquid reiciendis natus commodi eum numquam facere voluptate
          quam itaque suscipit qui optio, minima voluptatibus tempore placeat
          quisquam distinctio quae non rerum? Debitis, laborum? Modi veritatis
          doloremque, animi magnam voluptatibus veniam soluta necessitatibus
          porro tenetur facere reprehenderit minus qui, quam laborum facilis
          iste id doloribus iure neque non ratione nesciunt quas quidem. Fuga,
          minus! Sit ex laudantium, sint dicta quasi omnis voluptas mollitia
          quos unde aut facere laboriosam perspiciatis nihil quibusdam
          aspernatur recusandae maxime odio a pariatur ratione ut! Illum aliquid
          deleniti consequuntur illo? Eum, quasi nobis! Repellat illum mollitia
          perspiciatis numquam accusamus dolores ex quod porro hic debitis
          corporis sit cum, quas nesciunt molestiae voluptatibus et, nisi quo
          nulla! Ducimus ipsam nobis doloremque. Ea officia laborum ratione illo
          non corporis saepe expedita velit incidunt dolorum temporibus
          reprehenderit qui ad rerum in quo voluptatum quos, fuga pariatur!
          Consectetur accusantium ex sed architecto tempore aliquam? Maxime
          rerum ea vel, minima voluptas sed provident, cupiditate optio magni
          ullam placeat nobis adipisci delectus eius odio et. Ratione ipsum
          harum vel rem in officiis laboriosam unde quae ipsa? Odit incidunt
          quidem atque architecto nihil quae sint, eaque commodi perspiciatis.
          Perferendis, fuga reiciendis dicta tempore similique illum voluptatum,
          dolore corrupti autem voluptatem labore dolor eos qui. Iste, ex
          corporis. Aliquam adipisci, nulla, nesciunt magnam sunt cum quod unde
          perspiciatis labore repellendus magni, voluptatum iusto ullam eveniet
          nemo totam aut doloremque dolores eius suscipit ipsum optio. Omnis aut
          officia asperiores! Praesentium, nisi? Unde voluptatem beatae ad
          distinctio impedit, molestias, eius totam, praesentium minima libero
          tenetur consectetur earum. Reiciendis, deleniti? Rerum mollitia
          tenetur doloribus exercitationem excepturi adipisci autem repellendus
          hic nisi. Quo placeat eos esse temporibus odio, ipsum doloremque
          blanditiis architecto vitae, facere deleniti, accusamus dolorem ab.
          Vitae ipsam, temporibus nostrum nisi, illum voluptatem itaque,
          voluptate aperiam nihil cupiditate quod repudiandae. Quos omnis
          ducimus amet iure, alias corporis rerum autem. Consectetur veritatis
          omnis quis, ea commodi dolores excepturi corrupti placeat maxime
          repudiandae earum amet beatae unde saepe, nostrum quia, aut culpa?
          Dolorem mollitia hic ea commodi vero odio iusto optio, praesentium
          illum, ipsam consectetur quia, totam eos. Unde incidunt rem
          repudiandae corrupti perspiciatis quas quos illo, itaque est? Vitae,
          quibusdam ullam. Quibusdam, repellendus consectetur cupiditate minus,
          necessitatibus repellat sapiente optio ipsum vero neque saepe debitis
          ipsa iste perferendis quis tempora amet obcaecati provident velit.
          Aspernatur vitae praesentium velit dicta ratione similique? Porro
          ullam nam officia perspiciatis ab quia, illo doloribus harum odio eius
          dolor, placeat commodi iste? Itaque omnis amet quod ex earum maxime
          eos, adipisci debitis aliquam voluptate nihil voluptatibus? Aut optio
          odio cumque perferendis sed autem quaerat fugiat modi, nulla dicta
          quibusdam asperiores assumenda maiores facere magnam sunt, facilis
          sapiente! Repudiandae voluptate tempora distinctio odit, iusto
          deleniti. Porro, quasi. Nisi cum atque exercitationem debitis rem unde
          laboriosam. Magnam minima aperiam quaerat rerum qui, iusto explicabo,
          consectetur eius aliquid in unde laborum praesentium veniam aliquam.
          Deleniti ab nemo quis odio. Hic, provident libero optio dignissimos
          voluptatem sit quos error laboriosam sequi quam, neque maiores,
          laborum veniam! Minus, esse natus? A cumque, voluptate eaque magni
          pariatur laborum repellat reprehenderit dolorem aut. Id illum nisi
          facere reiciendis asperiores magnam distinctio inventore culpa
          molestias explicabo pariatur, quidem odio quod rerum nihil molestiae,
          ad tempora minima voluptate iure ex quae? Illum minus accusantium
          molestias.
        </p>
      </div>
    </animated.div>
  );
};

export default ComponentTwo;
