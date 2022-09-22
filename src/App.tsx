import React, { useState } from "react";
import logo from "./logo.svg";

import Modal from "./Components/Modal";
import ModalHeader from "./Components/ModalHeader";
import ModalContent from "./Components/ModalContent";
import ModalFooter from "./Components/ModalFooter";

function App() {
  // is it better to keep modal state outside of modal component and pass as a prop?
  // or keep modal component encapsulated, keeping all it needs to use within

  return (
    <div>
      <h1>Modal</h1>
      <Modal>
        <ModalHeader>
          <h2>Modal Header</h2>
        </ModalHeader>
        <ModalContent>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              corrupti adipisci quasi quas culpa illum, non assumenda digniss
            </p>
          </div>
        </ModalContent>
        <ModalFooter callToActionLabel={"Success"} />
      </Modal>

      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          officiis nihil laborum ipsa repellendus iste reprehenderit optio
          fugiat quod? Quos, iure! Nobis debitis reiciendis incidunt fugit
          tempora voluptate exercitationem. Impedit harum, quasi repellendus
          molestias recusandae quas minus optio placeat consequuntur
          repudiandae, ipsa explicabo consequatur quam. Ex deserunt natus non
          perspiciatis, nobis odio molestias quam sapiente, quis est praesentium
          optio? Cumque reiciendis ad facere debitis nostrum fugit suscipit?
          Voluptatem ea iusto quia aperiam soluta molestiae eius quos nobis
          pariatur voluptate dignissimos sequi est veritatis cum, cupiditate
          dicta officiis tempora! Laborum perspiciatis consectetur hic repellat
          ex animi in non, delectus rem nostrum minima blanditiis! Iusto
          voluptatum ullam itaque deleniti laborum vitae quaerat nobis
          voluptates neque fugiat magni est numquam, sapiente atque obcaecati
          dolorem. Rem, earum. Laudantium, cum? Quo minima quis amet laudantium
          nobis odit eos quaerat, hic iure provident deleniti. Dolorum impedit
          consequatur illum reiciendis possimus iste libero omnis enim
          voluptates fuga asperiores explicabo maxime sapiente, eaque natus
          repellendus voluptas, magnam odio autem perspiciatis ab quisquam.
          Exercitationem ab praesentium dolorem corrupti quasi officia ipsa,
          eaque, voluptate iure, blanditiis sequi enim saepe eius quis est.
          Beatae nisi voluptatum deserunt molestiae labore maxime. Quisquam ab
          nam autem at aliquam, aperiam, quam earum quos commodi esse labore
          perspiciatis tenetur cupiditate natus culpa porro, quibusdam excepturi
          numquam ipsa velit. Dolores quia dignissimos illum, tempora, ut
          blanditiis repellendus dolorem amet pariatur, quasi omnis temporibus
          delectus fugit praesentium dolore veniam voluptatibus? Temporibus unde
          beatae repellat fuga neque, accusamus eaque adipisci molestias eos,
          ratione officiis! Mollitia incidunt distinctio at laudantium
          reiciendis aspernatur asperiores, accusamus earum est exercitationem
          harum officia consectetur ullam nihil quae quis impedit. Minima
          expedita, nesciunt odit quo quia eos quae neque doloremque doloribus
          labore, debitis tempora omnis dolor quaerat amet alias iure
          consectetur id animi nemo at! Debitis quae, eveniet facilis nam id ad
          porro ratione ipsum aspernatur sint cumque, nisi ab. Alias, dolorem
          expedita aut cum esse debitis soluta velit, incidunt ipsum fuga
          tempore! Quod accusamus harum enim vel beatae est ab aut, odit
          praesentium optio eius incidunt, eveniet aperiam, suscipit alias
          quidem? Corporis sed ut, animi porro temporibus neque saepe.
          Blanditiis sit ullam vel facilis debitis minus nisi assumenda autem,
          aliquam iusto iure ea, corrupti dolorum, fugit laboriosam distinctio
          aspernatur dicta magnam cumque aliquid ipsa. Autem vero libero sed ex.
          Laudantium inventore provident libero. Suscipit consectetur laudantium
          voluptatum reiciendis tempore modi sed doloribus! Optio, consectetur
          consequuntur dicta asperiores aperiam cumque magnam incidunt delectus
          repudiandae cupiditate voluptas libero possimus magni nam in
          dignissimos nemo laboriosam nesciunt earum vel voluptatibus itaque ex
          sint similique. Corporis repudiandae similique quidem nobis iusto
          saepe nemo eligendi, reprehenderit dicta ab rerum quibusdam,
          consequatur quisquam laudantium non. Nesciunt expedita culpa, aliquid,
          sequi fuga quia delectus velit repellendus ullam earum amet blanditiis
          rerum in quod! Perferendis culpa dignissimos maxime consequatur
          quaerat eius totam voluptates optio. Cum aut esse neque et similique
          eligendi quae sit incidunt sapiente laborum, corrupti in dolorum.
          Consectetur id accusamus possimus nostrum delectus voluptatum eveniet?
          Accusantium rem tenetur quis nihil voluptatibus, facilis delectus
          veritatis, sit sunt laudantium aut magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          nesciunt labore perferendis architecto odit repellat expedita
          dignissimos veniam cupiditate optio, voluptatum ipsam consectetur
          deleniti dolorem mollitia voluptatibus hic possimus asperiores libero
          quos repudiandae numquam, officia illum laudantium! Enim officia odio
          suscipit eum reprehenderit ipsam quae magni assumenda? Aspernatur,
          perspiciatis. Dolorum sequi similique, officia dignissimos omnis
          veniam rerum atque quam tenetur ipsum laudantium vitae consequuntur
          officiis ad molestiae obcaecati veritatis aperiam pariatur voluptate
          consequatur. Similique quibusdam itaque soluta delectus iste dolorem
          adipisci eos. Sint illum mollitia fuga doloribus dolore eum earum,
          nulla cupiditate velit reprehenderit error in odit doloremque fugit
          minus qui, numquam ducimus blanditiis nostrum beatae asperiores!
          Adipisci, repellat deleniti! Quae laudantium ea totam optio pariatur,
          autem illum cum nesciunt vero reprehenderit consequatur laborum odio
          tempora iure! Quasi veritatis architecto perspiciatis voluptatem
          tenetur saepe ut quos sunt dolore hic, eum maxime illo deserunt magnam
          aliquam error provident dignissimos at. Debitis praesentium deserunt
          vitae ab labore consequuntur cupiditate ut repellendus assumenda
          aspernatur sit amet hic explicabo commodi earum, quisquam magni culpa
          fugit ratione harum cum ipsum, soluta excepturi? Neque tempora, animi
          vitae, dolorem molestiae quasi perferendis adipisci iusto eveniet et
          asperiores earum qui explicabo nisi, cumque debitis deleniti
          laudantium mollitia? Reiciendis eius ut sit delectus hic quibusdam,
          perferendis officia, quaerat architecto laborum fugiat dolorum quam.
          Commodi provident similique nesciunt dolores eligendi soluta? Deleniti
          nisi deserunt iste fugit voluptates aut? Iste deserunt a provident
          dicta fugit tenetur sunt debitis alias, ipsam modi excepturi
          repudiandae consequuntur corporis consequatur nostrum. Aliquid,
          debitis. Quibusdam minima magnam temporibus sapiente dicta, eveniet
          quaerat sit explicabo voluptate eaque nihil ullam corrupti similique
          iusto quae ipsa amet, fugiat incidunt corporis perspiciatis. Est
          fugit, odit facilis delectus distinctio totam animi, ut maiores,
          libero vero neque. Vitae iste dolorum eos omnis, architecto atque
          repudiandae deserunt numquam nobis unde qui sunt temporibus molestiae
          cumque aut, esse quis dolor corrupti, illo quas facilis doloribus
          harum provident? Blanditiis esse nemo aut sit illum! Illum autem eius
          placeat repudiandae, odit maxime? Quisquam animi, iure eligendi
          praesentium possimus doloremque nesciunt sint suscipit totam
          perferendis quaerat voluptate ex explicabo aliquam atque ad doloribus
          repudiandae ipsam quos quam voluptatem! Provident quaerat repellendus
          esse in magni repudiandae eum atque illum voluptates quisquam ullam
          quod quae excepturi saepe, itaque reiciendis corporis ut sequi tempora
          fugiat. Corrupti quisquam excepturi omnis enim rem cumque voluptas
          tempora sed nam explicabo iste dolorum, quod culpa deleniti mollitia?
          Vero natus dignissimos laboriosam sapiente. Ducimus adipisci dolor
          ipsa, temporibus velit vel blanditiis maiores. Dolores atque vitae
          fugiat veritatis suscipit ipsam facilis veniam, debitis deserunt
          numquam recusandae est consequatur tempora nisi corporis doloremque
          laboriosam voluptas excepturi soluta nam aliquid exercitationem quia,
          magnam ipsa! Eligendi tempora accusantium aliquid alias libero amet,
          repudiandae esse eveniet cum qui vitae, expedita reprehenderit. A modi
          sed quibusdam temporibus. Repudiandae quaerat dolorum, architecto eos
          non natus veniam iste. Fugit vel exercitationem fuga magnam deserunt
          minima placeat iure aliquam consequuntur enim temporibus harum dolore
          distinctio aperiam pariatur quasi, optio, adipisci architecto!
          Consequuntur eos ea temporibus similique nobis qui doloremque, tenetur
          fugiat laboriosam eaque voluptatum excepturi sit officia explicabo
          culpa, facere ad distinctio perferendis. Fugit eligendi placeat illum
          minus autem consequuntur, reprehenderit vel natus esse suscipit sequi
          voluptatibus obcaecati, vero corporis. Voluptatum quod, sint vero
          magnam deleniti qui rem eligendi a, inventore ratione veritatis!
          Laudantium quis iste quos dolorem adipisci ratione tempora, est sed
          maiores pariatur ipsam doloremque at. Asperiores est voluptate, vero
          cupiditate pariatur ipsa labore quae illum saepe numquam sint quod
          eaque vitae ut praesentium iusto enim ipsam! Quos eveniet repellendus
          eum hic minus! A voluptates quo excepturi eaque accusamus cum minima
          sit, assumenda cumque, facere quas perspiciatis incidunt deserunt
          omnis odit dolores aperiam iste nam rem accusantium nostrum architecto
          pariatur. Necessitatibus odit pariatur tenetur quidem, quas quae
          facere, magnam assumenda sint ab quo neque deleniti consequuntur omnis
          eum, vitae illum facilis reprehenderit error. Officiis, molestiae
          magnam ipsa eos sit deleniti beatae modi quasi aut distinctio!
          Quibusdam mollitia, fuga numquam atque molestiae provident. Totam
          dolore ex aspernatur deleniti consequuntur autem ut vel iste! Facilis
          perspiciatis sint repudiandae quia repellendus dolor eos possimus,
          dolorum minima eius esse necessitatibus, corrupti nobis quod. Nemo in
          molestiae dolorem dicta rerum, odio fugit delectus accusamus pariatur
          doloribus cum dolore modi, quibusdam molestias? Illum quasi repellat
          nostrum accusamus animi, natus eos recusandae. Error nisi commodi
          mollitia nihil, impedit adipisci? Tempora, assumenda, quibusdam
          mollitia reiciendis distinctio ab amet a ex at perspiciatis, quae quia
          quis. Qui veniam corrupti voluptate modi aut rem incidunt, autem
          provident nostrum vero facere magni, quae pariatur iste
          exercitationem, quis eum commodi laudantium temporibus adipisci!
          Debitis beatae, delectus minima porro autem consequatur similique
          aliquam odio mollitia tempore voluptatibus fuga sunt aspernatur, in
          distinctio suscipit iure sit quo dolores? Voluptates eius harum
          perferendis! Veritatis, blanditiis? Odit, numquam. Sint sit qui
          dolorem deleniti sed assumenda voluptates quae ducimus? Sit ipsum
          natus nemo doloremque blanditiis illum porro deserunt soluta
          cupiditate consequuntur aliquam animi repellendus velit ad sed quia,
          consequatur molestias eius qui earum explicabo expedita, reiciendis
          eveniet exercitationem. Eos sit, reiciendis ipsum tempore nesciunt
          beatae repudiandae, laborum obcaecati, illo ex alias asperiores.
          Cumque earum et repellendus error culpa minima obcaecati consequuntur,
          unde corporis debitis, veniam esse, autem eligendi consequatur
          expedita inventore harum saepe vitae. Repellat, molestiae
          exercitationem. Unde vero itaque soluta enim accusamus ex facere
          minima quod cum quo, eius nemo, nam ipsam labore obcaecati quas, quia
          laborum repellendus facilis autem esse ipsum aperiam illum? Sed
          consequatur earum impedit ab harum dolore quam, praesentium nobis
          molestiae mollitia autem minima pariatur excepturi porro repellendus
          nulla corporis explicabo distinctio. Soluta consequuntur illo
          necessitatibus quo, similique animi molestiae rem? Consequuntur,
          architecto numquam non adipisci rem facere. Tempore cupiditate
          laudantium quam, qui quis expedita distinctio consectetur commodi,
          esse obcaecati, nulla in. Repellendus necessitatibus aliquam
          aspernatur nostrum nulla reprehenderit assumenda minus molestias
          eaque, enim quo molestiae quod ut provident dolorum distinctio esse
          tenetur libero suscipit corrupti explicabo saepe unde officiis sed.
        </p>
        <div>
          <p>
            Eum necessitatibus quia accusantium aperiam molestiae! Obcaecati
            facere, necessitatibus, assumenda ratione magnam eveniet dignissimos
            ea et expedita eaque aut earum. Tempore, commodi non similique,
            tenetur ad, asperiores deserunt iusto possimus eaque aut dolorum!
          </p>
        </div>
      </div>
      <button>Test Button</button>
    </div>
  );
}

export default App;
