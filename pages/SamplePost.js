import Post from '../layouts/Post';
import Header from '../components/Header';
import P from '../components/Paragraph';

export default () =>
  <div>
    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
    `}</style>
    <Post>
      <Header title="Lorem Ipsum" />
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas,
        diam sit amet scelerisque rhoncus, nisi elit lobortis eros, pharetra
        condimentum lectus enim at lacus. Sed vehicula sapien ut massa tempus,
        vitae sagittis leo sodales. Phasellus vel orci malesuada urna luctus
        facilisis ut nec nisl. Sed mi ante, vestibulum eget lobortis non,
        sagittis quis velit. Etiam consequat sapien eget purus molestie luctus.
        Quisque ullamcorper molestie vestibulum. Nullam vitae faucibus diam.
        Etiam nec nibh in libero pharetra cursus. Donec sit amet neque tempus
        lorem vulputate malesuada. In at porta felis, quis mattis nibh.
      </P>
      <P>
        Maecenas sodales eu velit ut ultricies. Proin fringilla sapien vehicula
        leo ullamcorper, ac dictum ligula malesuada. Sed bibendum vestibulum
        enim ac convallis. Aliquam ut velit eu ipsum tempor venenatis vel in
        nulla. Sed eu luctus nulla. Vestibulum interdum a tortor eu iaculis. Sed
        quam massa, fringilla ut velit at, pharetra convallis nibh. Vestibulum
        quis luctus tortor.
      </P>
      <P>
        Pellentesque placerat nibh non nulla mattis vestibulum nec ut nisi.
        Suspendisse fermentum felis et scelerisque lacinia. Curabitur aliquet
        commodo sapien, sit amet aliquam arcu convallis sit amet. Sed vitae
        finibus libero. Vestibulum pretium lacus sit amet metus dictum ultrices.
        Integer laoreet velit eu purus tempus, et elementum sapien interdum.
        Aenean egestas aliquet neque. Maecenas sed massa erat. Donec sed aliquet
        nisl. Maecenas porta risus id dolor vestibulum posuere. Pellentesque at
        accumsan justo. Duis sollicitudin, libero eu faucibus luctus, massa eros
        maximus nunc, vitae rutrum justo est nec tellus.
      </P>
      <P>
        Mauris ac suscipit justo. Mauris egestas auctor maximus. In consectetur
        lobortis pellentesque. Sed lacinia commodo scelerisque. Nam convallis
        ante vestibulum placerat tincidunt. Cras suscipit nisl vel mi ultrices,
        nec tincidunt nisl varius. Etiam dignissim dui ipsum, at scelerisque
        enim dapibus at. Proin lacus sapien, lobortis in tempor at, imperdiet ac
        purus. Sed in augue egestas, ultricies velit eget, tincidunt erat.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed pellentesque, elit vitae imperdiet
        placerat, ex lorem pretium purus, congue aliquet nisi eros nec tortor.
        Duis in sem non neque pulvinar ornare. Fusce accumsan lectus non odio
        varius, eu congue erat dapibus. Mauris venenatis metus sed lorem
        faucibus, et consequat ipsum commodo.
      </P>
      <P>
        Etiam consectetur est molestie, tempor mauris sit amet, tincidunt orci.
        In vitae risus fringilla, imperdiet mauris eu, euismod dolor. Sed
        sodales diam eu interdum efficitur. Donec non pellentesque lorem, at
        ornare dui. Sed accumsan sem at nisi placerat faucibus. Integer sodales
        elit mi, id aliquam nunc venenatis ut. Etiam semper maximus purus, et
        finibus ante imperdiet in. Maecenas lorem turpis, lacinia eu vehicula
        sed, mollis at sapien. Etiam maximus vulputate auctor. Donec consequat
        dui justo, ac vestibulum nibh vestibulum ac. Integer rhoncus egestas
        justo vitae molestie. Nulla varius blandit lacus, ut pharetra libero
        dictum eget. Aliquam vitae est ut nibh ultricies gravida.
      </P>
    </Post>
  </div>;
