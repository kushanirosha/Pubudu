
export interface Blog {
  id: number;
  title: string;
  image: string;
  date: string;
  reactions: number;
  comments: number;
  description: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Elements and Principles of Graphic Design",
    image: "https://picsum.photos/1200/400?random=1",
    date: "Sep 18, 2025",
    reactions: 250,
    comments: 30,
    description: (
      <div className="">
        <p className="">
          Graphic design is the art of visually communicating ideas and messages
          through combinations of images, typography, colors, and forms. Whether
          creating a logo, website, or advertisement, understanding the
          fundamental elements and principles of graphic design is essential to
          make compelling and effective visuals. This guide walks through the
          building blocks that every aspiring designer should know.
        </p>

        {/* Section 1 */}
        <h2 className="mt-5 font-bold">1. What Are Graphic Design Elements?</h2>
        <p>
          Graphic design elements are the simplest units of a design that can be
          manipulated to create structure and meaning. The primary elements
          include:
        </p>
        <ul>
          <li>
            <strong>Line:</strong> Lines can be straight, curved, thick, thin,
            or dashed and often define shapes or guide the viewer’s eye.
          </li>
          <li>
            <strong>Shape:</strong> Shapes are two-dimensional enclosed areas,
            either geometric (circles, squares) or organic (freeform, natural
            shapes).
          </li>
          <li>
            <strong>Form:</strong> When shapes get depth or dimension, they
            become forms—typically 3D objects.
          </li>
          <li>
            <strong>Color:</strong> Color adds emotion and vibrancy. It can
            influence mood and brand identity.
          </li>
          <li>
            <strong>Texture:</strong> Texture suggests how a surface feels—rough,
            smooth, soft—which can be visually simulated.
          </li>
          <li>
            <strong>Space:</strong> The area around or between elements;
            effective use of space can prevent clutter and enhance focus.
          </li>
          <li>
            <strong>Typography:</strong> The style and arrangement of text and
            fonts as a design element.
          </li>
          <li>
            <strong>Imagery:</strong> Photos, illustrations, and icons
            integrated into designs.
          </li>
        </ul>

        {/* Section 2 */}
        <h2>2. Why Design Principles Matter</h2>
        <ul>
          <li>
            <strong>Alignment:</strong> Keeping elements visually connected for
            coherence.
          </li>
          <li>
            <strong>Contrast:</strong> Using differences in color, size, or
            style for emphasis.
          </li>
          <li>
            <strong>Balance:</strong> Distributing visual weight equally
            (symmetrical) or unevenly (asymmetrical) for stability.
          </li>
          <li>
            <strong>Hierarchy:</strong> Arranging elements to show order of
            importance.
          </li>
          <li>
            <strong>Repetition:</strong> Reusing elements to create consistency.
          </li>
          <li>
            <strong>Proximity:</strong> Grouping related elements to show their
            connection.
          </li>
          <li>
            <strong>Movement:</strong> Guiding the viewer’s eye through the
            design’s flow.
          </li>
          <li>
            <strong>White Space:</strong> Empty space to avoid overcrowding and
            improve readability.
          </li>
        </ul>

        {/* Other Sections */}
        <h2>3. Exploring Lines in Design</h2>
        <p>
          Lines are more than just borders; they can create movement, separate
          content, or convey moods. Thick, straight lines denote strength, while
          curvy or broken lines suggest fluidity or playfulness.
        </p>

        <h2>4. Understanding Shapes and Forms</h2>
        <p>
          Shapes form the visual language for icons, logos, and layouts.
          Geometric shapes give order and clarity, while organic shapes bring
          softness and approachability. Adding form introduces realism and
          volume.
        </p>

        <h2>5. The Power of Color in Design</h2>
        <p>
          Colors evoke emotions and communicate brand personality instantly.
          Blue evokes trust, red signals urgency, complementary colors create
          interest, and analogous colors bring harmony.
        </p>

        <h2>6. Texture: Adding Depth and Interest</h2>
        <p>
          Texture gives designs a tactile feel, enriching flat visuals and
          helping elements stand out or recede.
        </p>

        <h2>7. Mastering Space and Layout</h2>
        <p>
          Negative space acts as breathing room, enhances readability, and
          guides viewers through hierarchy.
        </p>

        <h2>8. Typography as a Design Element</h2>
        <p>
          Typography involves style, size, spacing, and alignment. Good
          typography improves readability and tone.
        </p>

        <h2>9. Building Visual Hierarchy</h2>
        <p>
          Hierarchy determines the order viewers process content. Larger bold
          text captures attention first, smaller details follow.
        </p>

        <h2>10. Bringing It All Together</h2>
        <p>
          Mastering design means balancing elements and principles to meet
          creative goals. Analyze good work, practice, and apply fundamentals to
          create compelling visuals.
        </p>
      </div>
    ),
  },
  {
    "id": 2,
    "title": "Right Color Palette for Your Brand",
    "image": "https://picsum.photos/1200/400?random=2",
    "date": "Sep 18, 2025",
    "reactions": 180,
    "comments": 22,
    "description": "Colors are powerful in branding, triggering emotions, conveying messages, and creating recognition. To select the right palette: Understand your brand identity (fun, professional, values, audience). Explore color psychology (Red: passion, Blue: trust, Yellow: optimism, Green: growth, Purple: luxury). Start with a primary color representing the brand. Incorporate neutrals (black, white, gray, beige) for balance. Select complementary and accent colors for versatility. Use the 60-30-10 rule: 60% primary, 30% secondary, 10% accent. Test combinations for contrast and accessibility. Gather feedback from colleagues or audience. Maintain consistency across platforms using hex, RGB, CMYK codes. Be open to evolution over time while keeping the brand identity intact. Choosing the right color palette blends psychology, aesthetics, and strategy, crafting a unique color story that resonates with the audience."
  },
  {
    "id": 3,
    "title": "Top Graphic Design Trends (2025)",
    "image": "https://picsum.photos/1200/400?random=3",
    "date": "Sep 18, 2025",
    "reactions": 200,
    "comments": 28,
    "description": "Graphic design trends in 2025 reflect cultural shifts, technology, and creativity. Trends include: AI-Powered Design (automation, ideation, rapid iterations), Bold Minimalism (simple layouts with vibrant colors and striking typography), Textured Grains and Imperfections (handcrafted feel), Maximalist Illustrations and Vibrant Colors (layered visuals, energy), Retro and Vintage Vibes (nostalgia with modern twist), Abstract and Conceptual Design (express ideas through shape, color, texture), Storytelling Animation (motion to communicate narrative), Diversity and Inclusion (authentic representation), Creative Letter Typography (hand-drawn, experimental shapes), Biophilic and Natural Design (organic shapes, earth tones, botanical motifs). Combining these trends allows designers to create fresh, impactful visuals that resonate with modern audiences."
  },
  {
    "id": 4,
    "title": "Typography and Effective Design",
    "image": "https://picsum.photos/1200/400?random=4",
    "date": "Sep 18, 2025",
    "reactions": 170,
    "comments": 18,
    "description": "Typography is the art of arranging type to make language legible, readable, and visually appealing. It enhances readability, sets tone and mood (Serif: tradition, Sans-serif: modern, Script: elegance), establishes visual hierarchy (headings, subheadings, body), supports branding (consistent fonts or custom typefaces), influences UX (reduces cognitive load, responsive design), ensures accessibility (legible fonts, sufficient contrast, proper spacing), conveys professionalism and credibility, serves as a design element (size, shape, layout, color), and embraces future trends (variable fonts, animated typography, AI-assisted design). Mastering typography empowers designers to craft effective, meaningful visual messages across media."
  },
  {
    "id": 5,
    "title": "Logo Design Tips for Beginners",
    "image": "https://picsum.photos/1200/400?random=5",
    "date": "Sep 18, 2025",
    "reactions": 220,
    "comments": 25,
    "description": "Creating a logo involves visual representation of a brand’s identity, values, and mission. Tips include: Understand your brand (mission, values, audience), Research competitors (themes, originality), Sketch and conceptualize (explore multiple ideas), Keep it simple (recognizable, versatile), Choose typography carefully (aligns with brand character), Select colors wisely (reflect personality, limit to 2-3 shades), Make it versatile and scalable (test sizes, vector formats), Get feedback and refine (constructive criticism), Consider trends but prioritize timeless design, Use digital tools effectively (Adobe Illustrator, CorelDRAW). Following these steps ensures memorable and impactful logos."
  },
  {
    "id": 6,
    "title": "Negative Space in Graphic Design",
    "image": "https://picsum.photos/1200/400?random=6",
    "date": "Sep 18, 2025",
    "reactions": 160,
    "comments": 12,
    "description": "Negative space, or white space, is the unoccupied area around focal elements. It enhances visual balance, focus, readability, and user experience. Uses include: Creating dual meanings and visual illusions, Adding elegance and sophistication, Guiding the viewer’s eye, Creating contrast and emphasis. Negative space works across media and requires careful use to avoid overcrowding or excessive emptiness. Tips: Play with letterforms, use frames, combine with color contrasts, experiment with asymmetry, study classic examples, test designs at various sizes. Mastery of negative space elevates designs, making them clear, sophisticated, and engaging."
  },
  {
    "id": 7,
    "title": "Tips for Designing Infographics",
    "image": "https://picsum.photos/1200/400?random=7",
    "date": "Sep 18, 2025",
    "reactions": 140,
    "comments": 10,
    "description": "Infographics simplify complex information into memorable visuals. Tips include: Define audience and purpose (educate, persuade, entertain), Tell a clear story with a single message, Choose the right type (statistical, timelines, comparison charts, maps), Embrace white space for readability, Use consistent color schemes and branding, Master typography for clarity (font size, weight, hierarchy), Incorporate eye-catching visuals and icons, Optimize for mobile and social sharing, Use visual hierarchy to guide the viewer, Test, gather feedback, and iterate. Effective infographics engage viewers, convey data clearly, and maintain aesthetic appeal."
  }
];
