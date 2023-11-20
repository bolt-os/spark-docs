(function() {var type_impls = {
"spin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1230\">source</a><a href=\"#impl-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a> + 'a,\n    T: 'a + ?Sized,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.rwlock\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1232\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockReadGuard.html#tymethod.rwlock\" class=\"fn\">rwlock</a>(s: &amp;<a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;) -&gt; &amp;'a <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLock.html\" title=\"struct lock_api::rwlock::RwLock\">RwLock</a>&lt;R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a reference to the original reader-writer lock object.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1245-1247\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockReadGuard.html#tymethod.map\" class=\"fn\">map</a>&lt;U, F&gt;(\n    s: <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;,\n    f: F\n) -&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.MappedRwLockReadGuard.html\" title=\"struct lock_api::rwlock::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, U&gt;<span class=\"where fmt-newline\">where\n    F: FnOnce(&amp;T) -&gt; &amp;U,\n    U: ?Sized,</span></h4></section></summary><div class=\"docblock\"><p>Make a new <code>MappedRwLockReadGuard</code> for a component of the locked data.</p>\n<p>This operation cannot fail as the <code>RwLockReadGuard</code> passed\nin already locked the data.</p>\n<p>This is an associated function that needs to be\nused as <code>RwLockReadGuard::map(...)</code>. A method would interfere with methods of\nthe same name on the contents of the locked data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_map\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1269-1271\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockReadGuard.html#tymethod.try_map\" class=\"fn\">try_map</a>&lt;U, F&gt;(\n    s: <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;,\n    f: F\n) -&gt; Result&lt;<a class=\"struct\" href=\"lock_api/rwlock/struct.MappedRwLockReadGuard.html\" title=\"struct lock_api::rwlock::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, U&gt;, <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;&gt;<span class=\"where fmt-newline\">where\n    F: FnOnce(&amp;T) -&gt; Option&lt;&amp;U&gt;,\n    U: ?Sized,</span></h4></section></summary><div class=\"docblock\"><p>Attempts to make  a new <code>MappedRwLockReadGuard</code> for a component of the\nlocked data. Returns the original guard if the closure returns <code>None</code>.</p>\n<p>This operation cannot fail as the <code>RwLockReadGuard</code> passed\nin already locked the data.</p>\n<p>This is an associated function that needs to be\nused as <code>RwLockReadGuard::try_map(...)</code>. A method would interfere with methods of\nthe same name on the contents of the locked data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlocked\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1291-1293\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockReadGuard.html#tymethod.unlocked\" class=\"fn\">unlocked</a>&lt;F, U&gt;(s: &amp;mut <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;, f: F) -&gt; U<span class=\"where fmt-newline\">where\n    F: FnOnce() -&gt; U,</span></h4></section></summary><div class=\"docblock\"><p>Temporarily unlocks the <code>RwLock</code> to execute the given function.</p>\n<p>This is safe because <code>&amp;mut</code> guarantees that there exist no other\nreferences to the data protected by the <code>RwLock</code>.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1304\">source</a><a href=\"#impl-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLockFair.html\" title=\"trait lock_api::rwlock::RawRwLockFair\">RawRwLockFair</a> + 'a,\n    T: 'a + ?Sized,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlock_fair\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1318\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockReadGuard.html#tymethod.unlock_fair\" class=\"fn\">unlock_fair</a>(s: <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Unlocks the <code>RwLock</code> using a fair unlock protocol.</p>\n<p>By default, <code>RwLock</code> is unfair and allow the current thread to re-lock\nthe <code>RwLock</code> before another has the chance to acquire the lock, even if\nthat thread has been blocked on the <code>RwLock</code> for a long time. This is\nthe default because it allows much higher throughput as it avoids\nforcing a context switch on every <code>RwLock</code> unlock. This can result in one\nthread acquiring a <code>RwLock</code> many more times than other threads.</p>\n<p>However in some cases it can be beneficial to ensure fairness by forcing\nthe lock to pass on to a waiting thread if there is one. This is done by\nusing this method instead of dropping the <code>RwLockReadGuard</code> normally.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlocked_fair\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1333-1335\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockReadGuard.html#tymethod.unlocked_fair\" class=\"fn\">unlocked_fair</a>&lt;F, U&gt;(s: &amp;mut <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;, f: F) -&gt; U<span class=\"where fmt-newline\">where\n    F: FnOnce() -&gt; U,</span></h4></section></summary><div class=\"docblock\"><p>Temporarily unlocks the <code>RwLock</code> to execute the given function.</p>\n<p>The <code>RwLock</code> is unlocked a fair unlock protocol.</p>\n<p>This is safe because <code>&amp;mut</code> guarantees that there exist no other\nreferences to the data protected by the <code>RwLock</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bump\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1351\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/rwlock/struct.RwLockReadGuard.html#tymethod.bump\" class=\"fn\">bump</a>(s: &amp;mut <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Temporarily yields the <code>RwLock</code> to a waiting thread if there is one.</p>\n<p>This method is functionally equivalent to calling <code>unlock_fair</code> followed\nby <code>read</code>, however it can be much more efficient in the case where there\nare no waiting threads.</p>\n</div></details></div></details>",0,"spin::lock_api::RwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1359\">source</a><a href=\"#impl-Deref-for-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; Deref for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a> + 'a,\n    T: 'a + ?Sized,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1362\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deref</a>(&amp;self) -&gt; &amp;T</h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","spin::lock_api::RwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1383-1384\">source</a><a href=\"#impl-Display-for-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; Display for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a> + 'a,\n    T: Display + 'a + ?Sized,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1386\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fmt</a>(&amp;self, f: &amp;mut Formatter&lt;'_&gt;) -&gt; Result&lt;(), Error&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a>Read more</a></div></details></div></details>","Display","spin::lock_api::RwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1377\">source</a><a href=\"#impl-Debug-for-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; Debug for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a> + 'a,\n    T: Debug + 'a + ?Sized,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1378\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fmt</a>(&amp;self, f: &amp;mut Formatter&lt;'_&gt;) -&gt; Result&lt;(), Error&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a>Read more</a></div></details></div></details>","Debug","spin::lock_api::RwLockReadGuard"],["<section id=\"impl-Sync-for-RwLockReadGuard%3C'_,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1228\">source</a><a href=\"#impl-Sync-for-RwLockReadGuard%3C'_,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; Sync for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a> + Sync,\n    T: Sync + ?Sized,</span></h3></section>","Sync","spin::lock_api::RwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1367\">source</a><a href=\"#impl-Drop-for-RwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; Drop for <a class=\"struct\" href=\"lock_api/rwlock/struct.RwLockReadGuard.html\" title=\"struct lock_api::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"lock_api/rwlock/trait.RawRwLock.html\" title=\"trait lock_api::rwlock::RawRwLock\">RawRwLock</a> + 'a,\n    T: 'a + ?Sized,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/rwlock.rs.html#1369\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a>Read more</a></div></details></div></details>","Drop","spin::lock_api::RwLockReadGuard"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()