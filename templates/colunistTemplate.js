module.exports = function createTemplate({
    title,
    station,
    slug,
    slug_dinamize,
    cmp,
    facebook,
    twitter,
    instagram,
    youtube,
    flipboard,
    pinterest 
 }) {

    return `<?xml version="1.0" encoding="iso-8859-15"?>
<meta-template base="/br/com/uol/uolnewsletter/novos-posts/${slug}/" media="news">
<header>
    <portal>UOL</portal>
    <station>Notícias</station>
    <channel>UOL Newsletters</channel>
    <title>Novos Posts - ${title}</title>
    <keywords>${station}, redação</keywords>
    <priority>0.5</priority>
    <author>auto</author>
</header>
<exports>
    <export 
        title="UOL Newsletters" 
        url="http://${station}.uol.com.br/newsletters/novos-posts/${slug}/" 
        template="/br/com/uol/uolnewsletter/default.tpl" 
        path="/br/com/uol/${station}/newsletters/novos-posts/${slug}/noticia.htm" 
        encoding="utf-8">
        <collection></collection>
    </export>
    <export 
        title="Commons" 
        url="http://commons.uol.com.br/monaco/export/${station}.uol.com.br/newsletters/novos-posts/${slug}/" 
        template="/conteudo/templates/json/default.tpl" 
        path="/br/com/uol/commons/monaco/export/${station}.uol.com.br/newsletters/novos-posts/${slug}/noticia.json" 
        media="news" 
        encoding="utf-8" 
        commons-path="commons.uol.com.br/monaco/export/${station}.uol.com.br/newsletters/novos-posts/${slug}/">
        <collection export-path="/br/com/uol/fake/collection/piranguinho"></collection>
    </export>
</exports>

<modules>
    <module id="noticia" title="${title}" style="clear: both;">
        <group id="conteudo" title="Conteudo">
            <field id="colunista" title="template de colunista">
                <content type="hidden">true</content>
            </field>
            <field id="novos-posts" title="template com aviso de novo post de colunista - Leia mais">
                <content type="hidden">true</content>
            </field>
            <field id="slug" title="slug da newsletter">
                <content type="hidden">${slug}</content>
            </field>
            <field id="slug-dinamize" title="slug da newsletter na Dinamize">
                <content type="hidden">${slug_dinamize}</content>
            </field>
            <field id="cmp" title="cmp da newsletter">
                <content type="hidden">${cmp}</content>
            </field>
            <field id="name" title="nome da newsletter">
                <content type="hidden">${title}</content>
            </field>
            <field id="descricao" title="descricao">
                <content type="hidden"></content>
            </field>
            <field id="conteudo-adulto" title="Conteúdo Adulto?">
                <content type="hidden">true</content>
            </field>
            <field id="editorial" title="setando editorial como true">
                <content type="hidden">true</content>
            </field>
            <field id="estacao-url" title="Link para a estação" description="Opcional. Se não informado, manda para Home UOL">
                <content type="hidden">https://${station}.uol.com.br/</content>
            </field>
            <field id="titulo" title="Título" description="">
                <content type="text"></content>
                <validations>
                    <item type="required" />
                    <item type="system" />
                    <item type="no-html" />
                    <item type="max-chars" value="100" />
                </validations>
                <helpers>
                    <item type="char-count" />
                </helpers>
            </field>               
            <field id="share-newsletter" title="Este conteúdo é para assinantes?" description="Desabilita opções de compartilhamento e abrir link da newsletter em navegador.">
                <content-options type="check">
                    <option value="true">Sim</option>
                </content-options>
            </field>
        </group>
    </module>

    

    <include xpath="manchetes" path="_template/geral/newsletter-ultimos-posts.xml" />
    <include xpath="buscaColunas" path="_template/geral/newsletter-ultimos-posts.xml" />
    

    <module id="follow" title="Rodapé - Siga-nos">

        <group id="descricao" title="Descrição">
            <field id="titulo" title="Título alternativo" description="Só usar esse campo se o texto não seguir o padrão 'Siga o UOL [Nome da Newsletter]'">
                <content type="text">${title}</content>
            </field>
            <field id="sobre" title="Sobre">
                <content type="text"></content>
            </field>
        </group>

        <group id="redes-sociais" title="Redes Sociais">
            <field id="facebook" title="Facebook">
                <content type="static">${facebook}</content>
            </field>
            <field id="instagram" title="Instagram">
                <content type="static">${instagram}</content>
            </field>
            <field id="twitter" title="Twitter">
                <content type="static">${twitter}</content>
            </field>
            <field id="youtube" title="Youtube">
                <content type="static">${youtube}</content>
            </field>
            <field id="flipboard" title="Flipboard">
                <content type="static">${flipboard}</content>
            </field>
            <field id="pinterest" title="Pinterest">
                <content type="static">${pinterest}</content>
            </field>
        </group>

    </module>

    <module id="code" title="Código Fonte">
        <group id="source" title="Código HTML">
            <field id="html" title="HTML">
                <content type="textarea"></content>
            </field>
        </group>
    </module>
    

    <module id="config" title="Configuração" options="green">
        <group id="content" title="Dados">
            <field id="source" title="Path dos dados na Commons">
                <content type="static">${station}.uol.com.br/newsletters/novos-posts/${slug}</content>
            </field>
            <field id="type" title="Componente que será carregado">
                <content type="static">newsletter-core</content>
            </field>
            <field id="html" title="html">
                <content type="html">
                    <![CDATA[
                        <script type="text/javascript" src="https://c.jsuol.com.br/assets/?loadComponent=media&contentType=js&type=publicador&tpl=newsletter"></script>
                    ]]>
                </content>
            </field>
        </group>
        <group id="colors" title="Config de Cores">
            <field id="p1" title="Variável de Cor P1">
                <content type="static">#d9d9d9</content>
            </field>
            <field id="p2" title="Variável de Cor P2">
                <content type="static">#000000</content>
            </field>
            <field id="p3" title="Variável de Cor P3">
                <content type="static">#d9d9d9</content>
            </field>
            <field id="p4" title="Variável de Cor P4">
                <content type="static">#d9d9d9</content>
            </field>
        </group>
    </module>

    <module id="related" title="Correlatas" type="related"></module>
    <module id="file-actions" title="Ações" type="file-actions"></module>
    <module id="schedule" title="Agenda" type="schedule"></module>
    <module id="information" title="Informações" type="information"></module>
</modules>
</meta-template>
    `
}

