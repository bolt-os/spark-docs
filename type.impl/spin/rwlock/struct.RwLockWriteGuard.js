(function() {var type_impls = {
"spin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#629-709\">source</a><a href=\"#impl-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?Sized, R&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.downgrade\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#643-656\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLockWriteGuard.html#tymethod.downgrade\" class=\"fn\">downgrade</a>(self) -&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockReadGuard.html\" title=\"struct spin::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'rwlock, T&gt;</h4></section></summary><div class=\"docblock\"><p>Downgrades the writable lock guard to a readable, shared lock guard. Cannot fail and is guaranteed not to spin.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>writable = mylock.write();\n<span class=\"kw-2\">*</span>writable = <span class=\"number\">1</span>;\n\n<span class=\"kw\">let </span>readable = writable.downgrade(); <span class=\"comment\">// This is guaranteed not to spin\n</span><span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>readable, <span class=\"number\">1</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.downgrade_to_upgradeable\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#670-689\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLockWriteGuard.html#tymethod.downgrade_to_upgradeable\" class=\"fn\">downgrade_to_upgradeable</a>(self) -&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'rwlock, T, R&gt;</h4></section></summary><div class=\"docblock\"><p>Downgrades the writable lock guard to an upgradable, shared lock guard. Cannot fail and is guaranteed not to spin.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>writable = mylock.write();\n<span class=\"kw-2\">*</span>writable = <span class=\"number\">1</span>;\n\n<span class=\"kw\">let </span>readable = writable.downgrade_to_upgradeable(); <span class=\"comment\">// This is guaranteed not to spin\n</span><span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>readable, <span class=\"number\">1</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.leak\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#704-708\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLockWriteGuard.html#tymethod.leak\" class=\"fn\">leak</a>(this: Self) -&gt; &amp;'rwlock mut T</h4></section></summary><div class=\"docblock\"><p>Leak the lock guard, yielding a mutable reference to the underlying data.</p>\n<p>Note that this function will permanently lock the original lock.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n\n<span class=\"kw\">let </span>data: <span class=\"kw-2\">&amp;mut </span>i32 = spin::RwLockWriteGuard::leak(mylock.write());\n\n<span class=\"kw-2\">*</span>data = <span class=\"number\">1</span>;\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>data, <span class=\"number\">1</span>);</code></pre></div>\n</div></details></div></details>",0,"spin::RwLockWriteGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#741-748\">source</a><a href=\"#impl-Deref-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?Sized, R&gt; Deref for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#744-747\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deref</a>(&amp;self) -&gt; &amp;T</h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","spin::RwLockWriteGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#774-784\">source</a><a href=\"#impl-Drop-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?Sized, R&gt; Drop for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#775-783\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a>Read more</a></div></details></div></details>","Drop","spin::RwLockWriteGuard"],["<section id=\"impl-Send-for-RwLockWriteGuard%3C'_,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#114\">source</a><a href=\"#impl-Send-for-RwLockWriteGuard%3C'_,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?Sized + Send + Sync, R&gt; Send for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, T, R&gt;</h3></section>","Send","spin::RwLockWriteGuard"],["<section id=\"impl-Sync-for-RwLockWriteGuard%3C'_,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#115\">source</a><a href=\"#impl-Sync-for-RwLockWriteGuard%3C'_,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?Sized + Send + Sync, R&gt; Sync for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, T, R&gt;</h3></section>","Sync","spin::RwLockWriteGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#717-721\">source</a><a href=\"#impl-Display-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?Sized + Display, R&gt; Display for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#718-720\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fmt</a>(&amp;self, f: &amp;mut Formatter&lt;'_&gt;) -&gt; Result</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a>Read more</a></div></details></div></details>","Display","spin::RwLockWriteGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DerefMut-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#750-755\">source</a><a href=\"#impl-DerefMut-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?Sized, R&gt; DerefMut for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#751-754\">source</a><a href=\"#method.deref_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deref_mut</a>(&amp;mut self) -&gt; &amp;mut T</h4></section></summary><div class='docblock'>Mutably dereferences the value.</div></details></div></details>","DerefMut","spin::RwLockWriteGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#711-715\">source</a><a href=\"#impl-Debug-for-RwLockWriteGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?Sized + Debug, R&gt; Debug for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#712-714\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fmt</a>(&amp;self, f: &amp;mut Formatter&lt;'_&gt;) -&gt; Result</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a>Read more</a></div></details></div></details>","Debug","spin::RwLockWriteGuard"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()