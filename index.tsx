import { useState } from "react";
import { Box, TrendingUp, Trophy, Copy, Check, Search, Pickaxe } from "lucide-react";
import { toast } from "sonner";

export function Minecraft() {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedNick, setCopiedNick] = useState<string | null>(null);

  const minecraftNicks = [
    { nick: "『Nᴏᴛᴄʜ』", votes: 412345, category: "Legendarios" },
    { nick: "◥꧁ད BUILDER ཌ꧂◤", votes: 387654, category: "Constructores" },
    { nick: "【ⓂⒾⓃⒺⓇ】", votes: 356789, category: "Mineros" },
    { nick: "꧁༺ STEVE ༻꧂", votes: 334567, category: "Clásicos" },
    { nick: "✨ENCHANTER✨", votes: 312345, category: "Encantadores" },
    { nick: "『REDSTONE』PRO", votes: 298765, category: "Redstoners" },
    { nick: "༺♛CRAFTER♛༻", votes: 287654, category: "Crafteros" },
    { nick: "【ENDER】DRAGON", votes: 276543, category: "Ender" },
    { nick: "꧁WARRIOR꧂", votes: 265432, category: "PvP" },
    { nick: "『ᴄʀᴇᴇᴘᴇʀ』", votes: 254321, category: "Mobs" },
    { nick: "◆DIAMOND◆", votes: 243210, category: "Recursos" },
    { nick: "༒☬HEROBRINE☬༒", votes: 232109, category: "Legendarios" },
    { nick: "【ARCHITECT】", votes: 221098, category: "Constructores" },
    { nick: "『SURVIVOR』", votes: 210987, category: "Survival" },
    { nick: "◥꧁EXPLORER꧂◤", votes: 198876, category: "Aventureros" },
    { nick: "【ᴘɪxᴇʟ】MASTER", votes: 187765, category: "Pixel Art" },
    { nick: "✦ENDERMAN✦", votes: 176654, category: "Ender" },
    { nick: "『FARMER』", votes: 165543, category: "Granjeros" },
    { nick: "༺KNIGHT༻", votes: 154432, category: "PvP" },
    { nick: "【NETHER】LORD", votes: 143321, category: "Nether" }
  ];

  const categories = [...new Set(minecraftNicks.map(n => n.category))];

  const filteredNicks = searchTerm 
    ? minecraftNicks.filter(n => n.nick.toLowerCase().includes(searchTerm.toLowerCase()) || n.category.toLowerCase().includes(searchTerm.toLowerCase()))
    : minecraftNicks;

  const copyToClipboard = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopiedNick(nick);
    toast.success("¡Nickname copiado!");
    setTimeout(() => setCopiedNick(null), 2000);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8e44ad] to-[#9b59b6] p-8 rounded border border-gray-300 text-center mb-6 shadow-lg">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Box className="w-12 h-12 text-white" />
          <h1 className="text-4xl m-0 text-white font-black">
            Minecraft Nicknames
          </h1>
        </div>
        <p className="text-lg text-white/90">
          Nombres creativos y únicos para Minecraft Java y Bedrock
        </p>
      </div>

      {/* Search */}
      <div className="bg-white p-6 rounded border border-gray-300 mb-6">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nombre o categoría..."
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg text-lg outline-none focus:border-[#8e44ad] transition-colors"
          />
        </div>
      </div>

      {/* Categories Pills */}
      <div className="bg-white p-4 rounded border border-gray-300 mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSearchTerm("")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${!searchTerm ? 'bg-[#8e44ad] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Todos
          </button>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSearchTerm(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${searchTerm === cat ? 'bg-[#8e44ad] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Nicknames List */}
      <div className="bg-white border border-gray-300 rounded mb-6">
        <div className="bg-[#efefff] px-5 py-3 text-lg font-semibold text-gray-700 border-b border-gray-300 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#8e44ad]" />
          Nicknames populares ({filteredNicks.length})
        </div>
        <div className="p-5 space-y-3">
          {filteredNicks.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded p-4 hover:border-[#8e44ad] hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-between group"
              onClick={() => copyToClipboard(item.nick)}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8e44ad] to-[#9b59b6] rounded-full flex items-center justify-center text-white font-bold">
                  #{index + 1}
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xl font-semibold text-gray-800 mb-1">
                    {item.nick}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-600">{item.category}</span>
                    <span className="flex items-center gap-1 text-[#8e44ad]">
                      <TrendingUp className="w-4 h-4" />
                      {item.votes.toLocaleString()} votos
                    </span>
                  </div>
                </div>
              </div>
              {copiedNick === item.nick ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-semibold">Copiado</span>
                </div>
              ) : (
                <Copy className="w-5 h-5 text-gray-400 group-hover:text-[#8e44ad]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white border border-gray-300 p-8 rounded">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#8e44ad] pl-4">
          Guía completa para nicknames en Minecraft
        </h2>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Pickaxe className="w-6 h-6 text-[#8e44ad]" />
              ¿Por qué es importante tu nombre en Minecraft?
            </h3>
            <p className="mb-3">
              En Minecraft, tu username es permanente y te representa en todos los servidores. 
              A diferencia de otros juegos, NO puedes usar símbolos especiales en el nombre oficial 
              de Minecraft (solo letras, números y guión bajo), pero puedes usar símbolos en:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Nombres de display en servidores</strong> - Muchos servidores permiten cambiar tu nombre visible</li>
              <li><strong>Discord y redes sociales</strong> - Usa símbolos para tu presencia en comunidades</li>
              <li><strong>Nombres de mundos y construcciones</strong> - Carteles, libros, y títulos decorativos</li>
              <li><strong>Skins personalizadas</strong> - Refleja tu estilo con texturas únicas</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-[#8e44ad] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3">⛏️ Nombres por estilo de juego</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">🏗️ Survival/Builder</h4>
                <p className="text-sm mb-2">Enfocado en construcción y supervivencia:</p>
                <div className="space-y-1 text-sm font-mono bg-white p-2 rounded">
                  <div>Builder_Pro</div>
                  <div>Master_Crafter</div>
                  <div>Diamond_Miner</div>
                  <div>Architect_X</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">⚔️ PvP/Combat</h4>
                <p className="text-sm mb-2">Para jugadores competitivos:</p>
                <div className="space-y-1 text-sm font-mono bg-white p-2 rounded">
                  <div>xX_Warrior_Xx</div>
                  <div>PvP_Legend</div>
                  <div>Combat_King</div>
                  <div>The_Destroyer</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">🔴 Redstone Engineer</h4>
                <p className="text-sm mb-2">Para expertos en mecánicas:</p>
                <div className="space-y-1 text-sm font-mono bg-white p-2 rounded">
                  <div>Redstone_Master</div>
                  <div>Engineer_Tech</div>
                  <div>Circuit_Genius</div>
                  <div>Auto_Farmer</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">🎨 Creative/Artist</h4>
                <p className="text-sm mb-2">Para constructores artísticos:</p>
                <div className="space-y-1 text-sm font-mono bg-white p-2 rounded">
                  <div>Pixel_Artist</div>
                  <div>Creative_Soul</div>
                  <div>Master_Builder</div>
                  <div>Terraform_Pro</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3">📚 Inspiración de Minecraft</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-bold mb-2">🎮 Referencias del juego:</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Steve / Alex</li>
                  <li>Notch (creador)</li>
                  <li>Herobrine (leyenda)</li>
                  <li>Entity_303</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">💎 Recursos valiosos:</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Diamond_Hunter</li>
                  <li>Emerald_Trader</li>
                  <li>Netherite_King</li>
                  <li>Gold_Rusher</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">👾 Mobs icónicos:</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Creeper_Lord</li>
                  <li>Enderman_X</li>
                  <li>Wither_Storm</li>
                  <li>Dragon_Slayer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                ✅ Buenos nombres
              </h3>
              <ul className="text-sm space-y-1">
                <li>✓ <strong>Cortos y memorables:</strong> <code>Notch_Jr</code></li>
                <li>✓ <strong>Temáticos:</strong> <code>Diamond_Steve</code></li>
                <li>✓ <strong>Creativos:</strong> <code>Pixel_Wizard</code></li>
                <li>✓ <strong>Con guión bajo:</strong> <code>Master_Builder</code></li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                ❌ Evita estos
              </h3>
              <ul className="text-sm space-y-1">
                <li>✗ <strong>Números aleatorios:</strong> <code>Steve12345</code></li>
                <li>✗ <strong>Demasiado largo:</strong> <code>TheLegendaryMinecraftPlayer</code></li>
                <li>✗ <strong>Difícil de recordar:</strong> <code>xXx_N00b_xXx</code></li>
                <li>✗ <strong>Nombres ofensivos</strong> (serás baneado)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 p-6 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3">⚠️ Importante: Cambio de nombre</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#8e44ad] font-bold">•</span>
                <span>Puedes cambiar tu nombre de Minecraft <strong>una vez cada 30 días</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8e44ad] font-bold">•</span>
                <span>Tu nombre antiguo queda disponible para otros después de 37 días</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8e44ad] font-bold">•</span>
                <span>Verifica la disponibilidad en <strong>namemc.com</strong> antes de decidir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8e44ad] font-bold">•</span>
                <span>Algunos servidores tardan en actualizar tu nuevo nombre</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#8e44ad] to-[#9b59b6] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">🎮 Servidores populares y sus estilos</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-bold mb-2">Hypixel</h4>
                <p className="opacity-90">Nombres competitivos y cortos. Evita caracteres especiales ya que el chat no los muestra bien.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Mineplex</h4>
                <p className="opacity-90">Nombres amigables y casuales. La comunidad es más relajada.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">2B2T</h4>
                <p className="opacity-90">Nombres intimidantes o anónimos. Es el servidor de anarquía más antiguo.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Hermitcraft</h4>
                <p className="opacity-90">Nombres creativos y únicos. Enfocado en construcción y comunidad.</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3">💡 Tips Pro de YouTubers</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Si haces contenido, usa el mismo nombre en YouTube/Twitch para reconocimiento</li>
              <li>✓ Nombres cortos son más fáciles de buscar y mencionar en chat</li>
              <li>✓ Evita números al final - parecen cuentas alternativas (alts)</li>
              <li>✓ Considera que tu nombre aparecerá en leaderboards y rankings</li>
              <li>✓ Los nombres con tema de Minecraft envejecen mejor que referencias temporales</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
