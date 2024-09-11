'use client';

import BlogHeader from "@/ui/blog/blogHeader";
import useApplication from "@/ui/hooks/useApplication";
import Image from "next/image";

export default function IdeationStrategyClient(props) {
  const { dictionary, language } = useApplication();

  return (
    <>
      <article className="max-w-4xl mx-auto">
        <BlogHeader
          title={dictionary.blog.WCDFY['product-design'].title}
          readTime={10}
        />
        <Image
          alt="Laodicea Solutions Ürünler"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
          height="400"
          src="/blog/products/all-products.jpeg"
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
          width="800"
        />
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Laodicea Solutions olarak, bir ürünü tasarlamanın bazen zorlayıcı olabileceğinin farkındayız. Özellikle nereden başlayacağınızı veya vizyonunuzu nasıl gerçeğe dönüştüreceğinizi bilmiyorsanız, bu süreç daha da karmaşık hale gelebilir. İster küçük bir işletme sahibi olun ve dijital varlığınızı oluşturmak isteyin, ister çığır açan bir fikri olan bir girişimci olun, ürün tasarımı hizmetlerimiz tam da sizin ihtiyaçlarınıza göre şekilleniyor.
          </p>
          <p>Peki, bu sizin için gerçekten ne anlama geliyor? Adım adım inceleyelim.</p>
          <h2>Kişisel Dokunuş: Vizyonunuzla Başlıyoruz</h2>
          <p>
            Her harika ürün bir vizyonla başlar—işinizi veya sektörünüzü değiştirebilecek bir fikir kıvılcımı. Ancak bu ilk fikirden nihai ürüne yolculuk karmaşık olabilir. İşte biz burada devreye giriyoruz. Laodicea Solutions olarak, önceliğimiz vizyonunuzu ve karşılaştığınız zorlukları anlamaktır.
          </p>
          <p>
            Belki yeni bir mobil uygulama geliştirmeyi düşünüyorsunuz, belki web tabanlı bir platform ya da şirketiniz için özel bir sistem. Ne olursa olsun, sizinle şu basit soruyla başlıyoruz: Başarmak istediğiniz şey nedir?
          </p>
          <p>
            Bu aşamada, oturup (ister yüz yüze, ister dijital bir ortamda) sizinle detaylı olarak konuşuyoruz. İş hedefleriniz, müşterileriniz ve karşılaştığınız sorunlar hakkında bilgi alıyoruz. Amacımız, size hazır bir çözüm sunmak değil; tam tersine, ihtiyacınıza özel bir ürün tasarımı sunmaktır. İster sade bir uygulama arayüzü, isterse karmaşık bir sistem olsun, tamamen size özel çözümler üretiyoruz.
          </p>
          <Image
            alt="Laodicea Solutions Alternatif Ürünler"
            className="w-full rounded-lg my-8"
            height="300"
            src="/blog/products/all-products-alternative.jpeg"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width="600"
          />
          <h2>Araştırma ve Vizyon: Hedef Kitlenizi Anlamak</h2>
          <p>Hedefleriniz netleştiğinde, derinlemesine bir araştırma aşamasına geçiyoruz. Bu noktada piyasanızı ve hedef kitlenizi daha yakından tanımak için titiz bir çalışma başlatıyoruz.</p>
          <p>Kendimize şu soruları soruyoruz:</p>
          <ul className="list-disc">
            <li>Bu ürünü kimler kullanacak?</li>
            <li>Kullanıcıların çözmeye çalıştıkları problemler nelerdir?</li>
            <li>Benzer ürünler karşısında kullanıcıların beklentileri nedir?</li>
          </ul>
          <p>
            Hedef kitlenizi anlamak, başarılı bir ürün tasarımının temelidir. Kullanıcı davranışlarını analiz ediyor, mevcut trendleri inceliyor ve rakip ürünleri değerlendiriyoruz. Nihayetinde ürününüzün hem görsel açıdan hem de işlevsellik açısından kusursuz olmasını sağlıyoruz.
          </p>
          <p>Bu aşama, ürününüzün sadece iyi görünmesini değil, aynı zamanda kullanıcıların ihtiyaçlarına yanıt vermesini ve işlevsel olmasını garanti eder.</p>
          <h2>Her Aşamada İşbirliği: Yolculuk Boyunca Sizinleyiz</h2>
          <p>Tasarım sadece sizin için yaptığımız bir iş değil, sizinle birlikte yürüttüğümüz bir süreçtir. Laodicea Solutions olarak, işbirliğine dayalı bir ruhla çalışırız. En iyi sonuçların, müşterinin her adımda sürece dahil olduğu projelerden çıktığını biliyoruz. Beyin fırtınasından ilk taslakların gözden geçirilmesine kadar, sürekli olarak sizi sürece dahil ediyoruz.</p>
          <p>İlk aşamada tasarım denemeleri(wireframes), dijital çizimler ve eskizler üzerinden çalışıyoruz. Bu aşamada geri bildirimlerinizi alarak, projenin doğru yönde ilerlediğinden emin oluyoruz. Tasarım aşamalarında bir şeyler tam istediğiniz gibi hissettirmiyorsa, hemen düzeltiyoruz. Eğer süreç içinde yeni fikirler ortaya çıkarsa, esnek bir yaklaşım sergileyerek bu fikirleri projemize entegre ediyoruz.</p>
          <p>Amacımız, ürünün sizin vizyonunuzu yansıtması ve kullanıcıların ihtiyaçlarına tam anlamıyla cevap vermesidir.</p>
          <h2>Prototip ve Test: Ürünü Gerçekleştirmek</h2>
          <p>Tasarım konseptine karar verdiğimizde, sıra ürünün gerçek dünyada nasıl çalışacağını görmeye gelir. Bu aşamada, sizin için prototipler oluşturuyoruz.</p>
          <p>Prototip aşamasında, ürününüzün nasıl işleyeceğine dair ilk canlı hissi alıyorsunuz. Mobil uygulamanızın veya web sitenizin nasıl çalıştığını, nasıl tepki verdiğini görebilir, kullanıcı akışlarını deneyimleyebilirsiniz. Bu aşamada, tam anlamıyla gelişime başlamadan önce tüm detayları görme ve düzeltme şansına sahip oluyorsunuz.</p>
          <p>Ayrıca, kullanıcı geri bildirimleri alıyoruz. Hedef kitlenize ulaşma imkânınız varsa, ürünün prototipini onlar üzerinde test ederek değerli geri bildirimler topluyoruz. Gerçek kullanıcıların geri bildirimleri, nihai tasarımın kullanıcı dostu olmasını ve amacına uygun çalışmasını sağlar.</p>
          <h2>İşlevsellik ve Estetiği Dengelemek: Form ve Fonksiyonun Buluşma Noktası</h2>
          <p>Mükemmel bir tasarım sadece güzel görünmekle kalmamalı, aynı zamanda işlevselliği de mükemmel olmalıdır. Laodicea Solutions olarak, estetik ve işlevselliği kusursuz bir denge içinde sunmayı hedefliyoruz.</p>
          <p>Tabii ki ürününüzün profesyonel ve görsel olarak etkileyici görünmesi önemli. Ancak bunun yanında, ürününüzün performansının da sorunsuz olması gerekiyor. Kullanıcıların ihtiyaçlarını karşılayan temiz ve minimal tasarımlar sunuyoruz. Navigasyonun kullanıcı beklentilerini karşılaması, butonların doğru yerlere yerleştirilmesi ve kullanımın sezgisel olması bizim önceliğimizdir.</p>
          <p>Amacımız, kullanıcıların ürününüzü severek ve kolaylıkla kullanmasını sağlarken, işlevsel olarak da işletme hedeflerinize hizmet eden bir ürün ortaya çıkarmaktır.</p>
          <Image
            alt="Laodicea Solutions Ürünler Grid"
            className="w-full rounded-lg my-8"
            height="300"
            src="/blog/products/all-products-grid.jpeg"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width="600"
          />
          <h2>Devamlılık ve Gelişim: Ürün Sürekli Gelişir</h2>
          <p>
            Ürün lansmanının ardından tasarım süreci sona ermez. Aslında en iyi tasarımlar zaman içinde gelişir ve iteratif süreçlerle daha da iyileştirilir. Bu nedenle, ürün tasarım hizmetlerimizde sürekli destek ve geliştirme seçenekleri sunuyoruz.
          </p>
          <p>
            Bir süre sonra yeni özellikler eklemek ya da kullanıcı geri bildirimlerine dayanarak değişiklikler yapmak gerekebilir. Biz bu aşamada da yanınızdayız. İster küçük bir ayarlama, isterse büyük bir yeniden tasarım olsun, ürününüzün rekabet gücünü ve kullanıcı memnuniyetini artırmak için birlikte çalışmaya devam ediyoruz.
          </p>
          <h2>Diğer Ürün Tasarım Hizmetleriyle Karşılaştırma: Neden Bizi Seçmelisiniz?</h2>
          <p>Pek çok ürün tasarım şirketi varken, neden bizi tercih etmelisiniz? Laodicea Solutions olarak bizi öne çıkaran birkaç önemli nokta var:</p>
          <ul>
            <li><strong>Kişiye Özel Yaklaşım:</strong> Hazır şablonlar veya kalıplar kullanmıyoruz. Her tasarım, tamamen sizin ihtiyaçlarınıza göre şekillenir.</li>
            <li><strong>İşbirliği Süreci:</strong> Tasarım sürecinde her aşamada sizi dahil ediyoruz. Ürün sizin ve tam anlamıyla tatmin olmanızı istiyoruz.</li>
            <li><strong>Kullanıcı Merkezli Tasarım:</strong> Tasarımlarımız, kullanıcı deneyimine odaklanır. Bu da müşteri memnuniyeti, etkileşim ve bağlılık oranlarının artmasını sağlar.</li>
            <li><strong>Sürekli Destek:</strong> Tasarımın sürekli gelişen bir süreç olduğuna inanıyoruz. Gelecekte yapılacak güncellemelerde de yanınızda olmaya devam ediyoruz.</li>
          </ul>
          <h2>Birlikte Harika Bir Şey Tasarlayalım</h2>
          <p>
            Laodicea Solutions’da sadece ürün tasarlamıyoruz—uzun süreli iş ortaklıkları kuruyoruz. Eğer aklınızda bir fikir varsa ve bunu insanların severek kullanacağı bir ürüne dönüştürmek istiyorsanız, size yardımcı olmaktan memnuniyet duyarız.
          </p>
          <p>
            Fikir aşamasından son lansmana kadar, her aşamada sizinle birlikte, rehberlik ederek, uzmanlık sağlayarak ve işbirliği içinde çalışıyoruz. Gelin, birlikte harika bir şey yaratalım.
          </p>
        </div>
      </article>
      <section className="max-w-4xl mx-auto mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatCanDoWeDoOffers
            .filter((offer) => offer.name !== 'product-design')
            .slice(0, 2)
            .map((offer) => (
              <div
                key={offer.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  alt={dictionary.blog.WCDFY[offer.name].title}
                  className="w-full h-48 object-cover"
                  height="200"
                  src={offer.cardImageSrc}
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {dictionary.landingPage.project.WCDFY[offer.name]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {dictionary.blog.WCDFY[offer.name].summary}
                  </p>
                  <Link
                    className="rounded px-5 py-3 text-white bg-black"
                    href={`/${language}/blog/what-we-can-do-for-you/${offer.name}`}
                  >
                    {dictionary.common.readMore}
                    {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}